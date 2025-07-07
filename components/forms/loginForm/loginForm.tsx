import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loginFormStyles } from './loginFormStyles';
import { useLoginForm } from './useLoginForm';
import { Controller } from 'react-hook-form';
import { router } from 'expo-router';
import { isEmpty } from 'lodash';
import { GLOBAL_STYLES } from '@/styles/global';
import { IS_IOS } from '@/constants';
import { METRICS } from '@/styles/metrics';
import { COLORS } from '@/styles/colors';
import AnimatedMainLogo from '@/components/common/animatedMainLogo';

const LoginForm = () => {
  const { loginFormControl, errors, isLoading, handleLogIn } = useLoginForm();

  return (
    <Pressable
      style={GLOBAL_STYLES.container}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <ScreenGradientContainer>
        <KeyboardAvoidingView
          behavior={IS_IOS ? 'padding' : 'height'}
          style={loginFormStyles.inner}
        >
          <SafeAreaProvider>
            <SafeAreaView style={loginFormStyles.safeArea}>
              <View style={loginFormStyles.logoContainer}>
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
                  marginBottom: isEmpty(errors) ? METRICS.gap.medium : 0,
                }}
              >
                <View>
                  <Controller
                    control={loginFormControl}
                    name="userName"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={[
                          GLOBAL_STYLES.input,
                          isLoading && GLOBAL_STYLES.inputDisabled,
                        ]}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Username"
                        placeholderTextColor={COLORS.purple}
                        editable={!isLoading}
                      />
                    )}
                  />

                  {errors.userName?.message && (
                    <Text style={GLOBAL_STYLES.error}>
                      {errors.userName.message}
                    </Text>
                  )}
                </View>

                <View>
                  <Controller
                    control={loginFormControl}
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
                      />
                    )}
                  />

                  {errors.password && (
                    <Text style={GLOBAL_STYLES.error}>
                      {errors.password.message}
                    </Text>
                  )}
                </View>
              </View>

              <View style={loginFormStyles.buttonsContainer}>
                <TouchableOpacity
                  style={[
                    GLOBAL_STYLES.primaryButton,
                    isLoading && GLOBAL_STYLES.buttonDisabled,
                  ]}
                  onPress={handleLogIn}
                  disabled={isLoading}
                >
                  <Text style={GLOBAL_STYLES.primaryButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    GLOBAL_STYLES.secondaryButton,
                    isLoading && GLOBAL_STYLES.buttonDisabled,
                  ]}
                  onPress={() => router.replace('/signIn')}
                >
                  <Text style={GLOBAL_STYLES.secondaryButtonText}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </KeyboardAvoidingView>
      </ScreenGradientContainer>
    </Pressable>
  );
};

export default LoginForm;
