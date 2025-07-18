import { METRICS } from '@/styles/metrics';
import { StyleSheet } from 'react-native';

const { padding, gap } = METRICS;

export const loginFormStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
  },
});
