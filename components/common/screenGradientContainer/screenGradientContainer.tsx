import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenGradientContainerProps } from './screenGradientContainerTypes';
import { screenGradientContainerStyles } from './screenGradientContainerStyles';

const ScreenGradientContainer: React.FC<ScreenGradientContainerProps> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={['#1e1e2f', '#2c2c3a', '#9370db']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={screenGradientContainerStyles.container}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenGradientContainer;
