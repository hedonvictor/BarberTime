
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

const  SchedulingsClientsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meu perfil</Text>

      <StatusBar style="auto" />
    </View>
  );
}

export default SchedulingsClientsScreen;