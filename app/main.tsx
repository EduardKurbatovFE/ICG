import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import { signOut } from 'firebase/auth';
import { Text, View } from 'react-native';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { deleteToken } from '@/tokenStorage';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Main = () => {
  const logout = async () => {
    await signOut(FIREBASE_AUTH);
    await deleteToken('firebase_token');
    router.replace('/login');
  };

  return (
    <ScreenGradientContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={logout}>
          <Text style={{ color: '#fff' }}>logout</Text>
        </TouchableOpacity>
      </View>
    </ScreenGradientContainer>
  );
};

export default Main;
