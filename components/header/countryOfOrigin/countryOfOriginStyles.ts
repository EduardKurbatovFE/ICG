import { COLORS } from '@/styles/colors';
import { METRICS } from '@/styles/metrics';
import { StyleSheet } from 'react-native';

const { white, grey } = COLORS;

const { padding, borderRadius, gap } = METRICS;

export const countryOfOriginStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: grey,
    padding: 20,
    borderWidth: 1,
    paddingVertical: padding.medium,
    paddingHorizontal: padding.medium,
    borderRadius,
    gap: gap.medium,
  },
  countryButton: {
    backgroundColor: white,
    justifyContent: 'space-between',
    borderRadius,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding.medium,
  },
  flagWrapper: {
    borderColor: grey,
    overflow: 'hidden',
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
