import { Animated } from 'react-native';
import { useAnimatedMainLogo } from './useAnimatedMainLogo';
import { GLOBAL_STYLES } from '@/styles/global';

const AnimatedMainLogo = () => {
  const { scaleAnim } = useAnimatedMainLogo();

  return (
    <Animated.Image
      source={require('../../../assets/logos/ICGMainLogo.png')}
      style={[GLOBAL_STYLES.mainLogo, { transform: [{ scale: scaleAnim }] }]}
      resizeMode="contain"
    />
  );
};

export default AnimatedMainLogo;
