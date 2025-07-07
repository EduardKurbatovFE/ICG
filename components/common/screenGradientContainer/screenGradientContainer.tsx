import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenGradientContainerProps } from './screenGradientContainerTypes';
import { COLORS } from '@/styles/colors';
import { GLOBAL_STYLES } from '@/styles/global';

const ScreenGradientContainer: React.FC<ScreenGradientContainerProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={[COLORS.darkBlue, COLORS.grey, COLORS.purple]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={GLOBAL_STYLES.container}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenGradientContainer;
