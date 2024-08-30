import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button 
        title='Registrar-me'
        onPress={() => navigation.navigate('RegisterScreen')}/>    
      <StatusBar style="auto" />
    </View>
  );
};

export default LoginScreen;