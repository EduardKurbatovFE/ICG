import CountryOfOrigin from '@/components/header/countryOfOrigin';
import HeaderTitle from '@/components/header/headerTitle';
import { COLORS } from '@/styles/colors';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Winky-Rough': require('../assets/fonts/WinkyRough-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen
        name="main"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: COLORS.darkBlue,
          },
          headerTintColor: '#fff',
          headerLeft: () => <HeaderTitle />,
          headerRight: () => <CountryOfOrigin />,
        }}
      />
    </Stack>
  );
}
