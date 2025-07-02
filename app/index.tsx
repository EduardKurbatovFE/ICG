import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default function Index() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    pulse.start();

    return () => pulse.stop();
  }, [scaleAnim]);

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
        <Animated.Image
          source={require('../assets/logos/ICGMainLogo.png')}
          style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
          resizeMode="contain"
        />
      </View>
    </ScreenGradientContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
  },
});
