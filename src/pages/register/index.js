import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Registrar</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default RegisterScreen;