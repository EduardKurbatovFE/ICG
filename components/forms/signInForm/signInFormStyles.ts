import { METRICS } from '@/styles/metrics';
import { Dimensions, StyleSheet } from 'react-native';

const { gap, padding, margin } = METRICS;

export const signInFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: padding.medium,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: padding.medium,
  },
  logoContainer: {
    marginBottom: 30,
  },
  buttonsContainer: {
    gap: gap.medium,
    marginTop: margin.medium,
  },
  socialMeidaButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: gap.small,
  },
});
