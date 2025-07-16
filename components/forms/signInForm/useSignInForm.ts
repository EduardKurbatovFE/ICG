import { EMIAL_REGEX } from '@/constants';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { saveToken } from '@/tokenStorage';
import { yupResolver } from '@hookform/resolvers/yup';
import { router } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';
import { makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Linking from 'expo-linking';
import { ANDROID_CLIENT_ID, EXPO_CLIENT_ID, IOS_CLIENT_ID } from '@/env';

const schema = yup.object().shape({
  email: yup.string().required('Username is required').matches(EMIAL_REGEX, {
    message: 'Invalid email',
  }),
  password: yup
    .string()
    .min(6)
    .required('Email is required')
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
      message:
        'Password must be at least 6 characters, contain at least one uppercase letter and one number',
    }),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const useSignInForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      '1097000223468-6l91qb5bh4mrgus8v3e1nn9f33agqsti.apps.googleusercontent.com',
    androidClientId: ANDROID_CLIENT_ID,
    clientId: EXPO_CLIENT_ID,
  });

  const redirectUri = makeRedirectUri();

  console.log('Redirect URI:', redirectUri);

  const { errors } = useFormState({ control });

  const handleSignIn = () => {
    handleSubmit(async (data) => {
      try {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          data.email,
          data.password
        );
        const token = await userCredential.user.getIdToken();
        await saveToken('firebase_token', token);
        router.replace('/main');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    })();
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(FIREBASE_AUTH, credential)
        .then((userCred) => {
          console.log('Logged in as:', userCred.user.email);
        })
        .catch(console.error);
    }
  }, [response]);

  const signInWithGoogle = () => {
    promptAsync();
  };

  return {
    signInFormControl: control,
    errors,
    isLoading,
    handleSignIn,
    signInWithGoogle,
  };
};
