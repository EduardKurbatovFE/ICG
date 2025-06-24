import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const handleLogin = () => {
    // авторизація тут (або просто навігація)
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
