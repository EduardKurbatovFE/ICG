import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      setTimeout(() => {
        router.replace('/login');
      }, 1000);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Cлевін, я законфіжив на двої девайсах все!</Text>
    </View>
  );
}
