import ScreenGradientContainer from '@/components/common/screenGradientContainer';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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
import GoogleLogo from '../../../assets/logos/googleLogo.svg';

const SignInForm = () => {
  const { signInFormControl, errors } = useSignInForm();

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <ScreenGradientContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={signInFormStyles.inner}
        >
          <SafeAreaProvider>
            <SafeAreaView style={signInFormStyles.safeArea}>
              <View style={signInFormStyles.logoContainer}>
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
                    control={signInFormControl}
                    name="userName"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={signInFormStyles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Username"
                        placeholderTextColor={'#9370db'}
                      />
                    )}
                  />

                  {errors.userName?.message && (
                    <Text style={signInFormStyles.error}>
                      {errors.userName.message}
                    </Text>
                  )}
                </View>

                <View>
                  <Controller
                    control={signInFormControl}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={signInFormStyles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        placeholderTextColor={'#9370db'}
                      />
                    )}
                  />

                  {errors.userName?.message && (
                    <Text style={signInFormStyles.error}>
                      {errors.userName.message}
                    </Text>
                  )}
                </View>

                <View>
                  <Controller
                    control={signInFormControl}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <TextInput
                        style={signInFormStyles.input}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Confirm password"
                        placeholderTextColor={'#9370db'}
                      />
                    )}
                  />

                  {errors.userName?.message && (
                    <Text style={signInFormStyles.error}>
                      {errors.userName.message}
                    </Text>
                  )}
                </View>
              </View>

              <View style={signInFormStyles.buttonsContainer}>
                <TouchableOpacity
                  style={[
                    signInFormStyles.button,
                    signInFormStyles.signInButton,
                  ]}
                >
                  <Text style={[signInFormStyles.buttonText]}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    signInFormStyles.button,
                    signInFormStyles.socialMeidaButton,
                  ]}
                  onPress={() => router.replace('/login')}
                >
                  <Text
                    style={[
                      signInFormStyles.buttonText,
                      signInFormStyles.socialMeidaButtonText,
                    ]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    signInFormStyles.button,
                    signInFormStyles.socialMeidaButton,
                  ]}
                >
                  <GoogleLogo width={24} height={24} />
                  <Text
                    style={[
                      signInFormStyles.buttonText,
                      signInFormStyles.socialMeidaButtonText,
                    ]}
                  >
                    Sign in with Google
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

export default SignInForm;
