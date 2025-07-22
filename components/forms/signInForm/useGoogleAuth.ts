// useGoogleAuth.ts
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      clientId: process.env.WEB_CLIENT_ID,
      iosClientId:
        '1097000223468-6l91qb5bh4mrgus8v3e1nn9f33agqsti.apps.googleusercontent.com',
      androidClientId: process.env.ANDROID_CLIENT_ID,
      webClientId: process.env.WEB_CLIENT_ID,
      //@ts-ignore
      redirectUri: makeRedirectUri({ useProxy: true }),
    } as any /* TS hack для передавання всіх полів */
  );

  const signIn = () => {
    promptAsync();
  };

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.idToken) {
      const { idToken } = response.authentication;
      const credential = GoogleAuthProvider.credential(idToken);
      signInWithCredential(FIREBASE_AUTH, credential)
        .then((userCred) => {
          console.log('Firebase login success', userCred.user.uid);
        })
        .catch((e) => Alert.alert('Firebase error', e.message));
    }
  }, [response]);

  return { request, signIn, response };
};
