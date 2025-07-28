import AnimatedMainLogo from '@/components/common/animatedMainLogo';
import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import { METRICS } from '@/styles/metrics';
import { getToken } from '@/tokenStorage';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const checkAuth = () => {
      setTimeout(async () => {
        const token = await getToken('firebase_token');

        if (token) {
          router.replace('/main');
        } else {
          router.replace('/login');
        }
      }, 1500);
    };

    checkAuth();
  }, []);

  return (
    <ScreenGradientContainer>
      <View style={styles.logoContainer}>
        <AnimatedMainLogo />
      </View>
    </ScreenGradientContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: METRICS.gap.medium,
    paddingHorizontal: METRICS.padding.medium,
  },
});
