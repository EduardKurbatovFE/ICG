import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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

const LoginForm = () => {
  const { loginFormControl, errors, onSubmit } = useLoginForm();

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <ScreenGradientContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={loginFormStyles.inner}
        >
          <SafeAreaProvider>
            <SafeAreaView style={loginFormStyles.safeArea}>
              <View style={loginFormStyles.logoContainer}>
                <Image
                  source={require('../../../assets/logos/ICGMainLogo.png')}
                  style={{ width: 150, height: 150 }}
                />
              </View>

              <View
                style={{
                  gap: isEmpty(errors) ? 20 : 0,
                  marginBottom: isEmpty(errors) ? 20 : 0,
                }}
              >
                <View>
                  <Controller
                    control={loginFormControl}
                    name="userName"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={loginFormStyles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Username"
                        placeholderTextColor={'#9370db'}
                      />
                    )}
                  />

                  {errors.userName?.message && (
                    <Text style={loginFormStyles.error}>
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
                        style={loginFormStyles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        placeholderTextColor={'#9370db'}
                      />
                    )}
                  />

                  {errors.password && (
                    <Text style={loginFormStyles.error}>
                      {errors.password.message}
                    </Text>
                  )}
                </View>
              </View>

              <View style={loginFormStyles.buttonsContainer}>
                <TouchableOpacity
                  style={[loginFormStyles.button, loginFormStyles.loginButton]}
                  onPress={onSubmit}
                >
                  <Text style={[loginFormStyles.buttonText]}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[loginFormStyles.button, loginFormStyles.signUpButton]}
                  onPress={() => router.replace('/signIn')}
                >
                  <Text
                    style={[
                      loginFormStyles.buttonText,
                      loginFormStyles.signUpButtonText,
                    ]}
                  >
                    Sign in
                  </Text>
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
