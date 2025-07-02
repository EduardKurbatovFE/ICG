import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const loginFormStyles = StyleSheet.create({
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
    // marginTop: 20,
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
  error: {
    color: 'red',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
