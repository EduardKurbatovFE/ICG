import AnimatedMainLogo from '@/components/common/animatedMainLogo';
import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import { METRICS } from '@/styles/metrics';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      setTimeout(() => {
        router.replace('/login');
      }, 3000);
    }
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
