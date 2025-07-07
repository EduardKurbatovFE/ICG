import { StyleSheet } from 'react-native';
import { METRICS } from './metrics';
import { COLORS } from './colors';
import { FONTS } from './fonts';

const { screenWidth, margin, padding, disabledOpacity } = METRICS;
const { darkBlue, white, purple, error } = COLORS;

const BUTTON_STYLES = {
  height: 48,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 24,
  width: screenWidth - 40,
} as const;

const BUTTON_TEXT_STYLES = {
  fontSize: FONTS.sizes.normal,
  fontWeight: 600,
} as const;

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryButton: {
    ...BUTTON_STYLES,
    backgroundColor: darkBlue,
  },
  primaryButtonText: {
    ...BUTTON_TEXT_STYLES,
    color: white,
  },
  secondaryButton: {
    ...BUTTON_STYLES,
    backgroundColor: white,
  },
  secondaryButtonText: {
    ...BUTTON_TEXT_STYLES,
    color: purple,
  },
  buttonDisabled: {
    opacity: disabledOpacity,
  },
  input: {
    height: 48,
    width: screenWidth - 40,
    borderWidth: 1,
    borderColor: purple,
    borderRadius: 24,
    paddingHorizontal: padding.medium,
    backgroundColor: white,
    color: purple,
  },
  inputDisabled: {
    opacity: disabledOpacity,
  },
  error: {
    color: error,
    marginVertical: margin.medium,
    paddingHorizontal: padding.medium,
  },
  mainLogo: {
    width: 120,
    height: 120,
  },
});
