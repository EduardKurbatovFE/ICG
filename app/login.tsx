import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ScreenGradientContainer from '@/components/screenGradientContainer';

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScreenGradientContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inner}
        >
          <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/icons/ICGMainLogo.png')}
                  style={{ width: 150, height: 150 }}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={'#9370db'}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'#9370db'}
              />

              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.loginButton]}>
                  <Text style={[styles.buttonText]}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.signUpButton]}>
                  <Text style={[styles.buttonText, styles.signUpButtonText]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        </KeyboardAvoidingView>
      </ScreenGradientContainer>
    </TouchableWithoutFeedback>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  input: {
    height: 48,
    width: screenWidth - 40,
    borderWidth: 1,
    borderColor: '#9370db',
    borderRadius: 24,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    color: '#9370db',
  },
  buttonsContainer: {
    gap: 20,
    marginTop: 10,
  },
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    width: screenWidth - 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#1e1e2f',
  },
  signUpButton: {
    backgroundColor: 'white',
  },
  signUpButtonText: {
    color: '#9370db',
  },
});
