import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SIZIND_GRID = {
  small: 8,
  medium: 16,
  large: 24,
};

export const METRICS = {
  screenWidth: width,
  screenHeight: height,
  padding: SIZIND_GRID,
  margin: SIZIND_GRID,
  gap: SIZIND_GRID,
  borderRadius: 8,
  disabledOpacity: 0.6,
};
