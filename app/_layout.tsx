import CountryOfOrigin from '@/components/header/countryOfOrigin';
import HeaderTitle from '@/components/header/headerTitle';
import { COLORS } from '@/styles/colors';
import { Stack } from 'expo-router';

export default function RootLayout() {
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
