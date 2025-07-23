import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';
import { signInFormStyles } from './signInFormStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useSignInForm } from './useSignInForm';
import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { METRICS } from '@/styles/metrics';
import { GLOBAL_STYLES } from '@/styles/global';
import { COLORS } from '@/styles/colors';
import { IS_IOS } from '@/constants';
import AnimatedMainLogo from '@/components/common/animatedMainLogo';

const SignInForm = () => {
  const { signInFormControl, errors, isLoading, handleSignIn } =
    useSignInForm();

  return (
    <Pressable
      style={GLOBAL_STYLES.container}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <ScreenGradientContainer>
        <KeyboardAvoidingView
          behavior={IS_IOS ? 'padding' : 'height'}
          style={signInFormStyles.inner}
        >
          <SafeAreaProvider>
            <SafeAreaView style={signInFormStyles.safeArea}>
              <View style={signInFormStyles.logoContainer}>
                {isLoading ? (
                  <AnimatedMainLogo />
                ) : (
                  <Image
                    source={require('../../../assets/logos/ICGMainLogo.png')}
                    style={GLOBAL_STYLES.mainLogo}
                  />
                )}
              </View>

              <View
                style={{
                  gap: isEmpty(errors) ? METRICS.gap.medium : 0,
                  marginBottom: isEmpty(errors) ? METRICS.margin.medium : 0,
                }}
              >
                <View
                  style={{
                    marginBottom: errors.email?.message
                      ? 0
                      : METRICS.margin.medium,
                  }}
                >
                  <Controller
                    control={signInFormControl}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={[
                          GLOBAL_STYLES.input,
                          isLoading && GLOBAL_STYLES.inputDisabled,
                        ]}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Email"
                        placeholderTextColor={COLORS.purple}
                        editable={!isLoading}
                      />
                    )}
                  />

                  {errors.email?.message && (
                    <Text style={GLOBAL_STYLES.error}>
                      {errors.email.message}
                    </Text>
                  )}
                </View>

                <View
                  style={{
                    marginBottom: errors.password?.message
                      ? 0
                      : METRICS.margin.medium,
                  }}
                >
                  <Controller
                    control={signInFormControl}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={[
                          GLOBAL_STYLES.input,
                          isLoading && GLOBAL_STYLES.inputDisabled,
                        ]}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        placeholderTextColor={COLORS.purple}
                        editable={!isLoading}
                        secureTextEntry={true}
                      />
                    )}
                  />

                  {errors.password?.message && (
                    <Text style={GLOBAL_STYLES.error}>
                      {errors.password.message}
                    </Text>
                  )}
                </View>

                <View>
                  <Controller
                    control={signInFormControl}
                    name="confirmPassword"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={[
                          GLOBAL_STYLES.input,
                          isLoading && GLOBAL_STYLES.inputDisabled,
                        ]}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Confirm password"
                        placeholderTextColor={COLORS.purple}
                        editable={!isLoading}
                        secureTextEntry={true}
                      />
                    )}
                  />

                  {errors.confirmPassword?.message && (
                    <Text style={GLOBAL_STYLES.error}>
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </View>
              </View>

              <View style={signInFormStyles.buttonsContainer}>
                <TouchableOpacity
                  style={[
                    GLOBAL_STYLES.primaryButton,
                    isLoading && GLOBAL_STYLES.buttonDisabled,
                  ]}
                  onPress={handleSignIn}
                  disabled={isLoading}
                >
                  <Text style={GLOBAL_STYLES.primaryButtonText}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    GLOBAL_STYLES.secondaryButton,
                    isLoading && GLOBAL_STYLES.buttonDisabled,
                  ]}
                  onPress={() => router.replace('/login')}
                  disabled={isLoading}
                >
                  <Text style={GLOBAL_STYLES.secondaryButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </KeyboardAvoidingView>
      </ScreenGradientContainer>
    </Pressable>
  );
};

export default SignInForm;
