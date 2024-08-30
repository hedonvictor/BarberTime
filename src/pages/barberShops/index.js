import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

const BarbersScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Barbearias disponiveis</Text>
      <Text>Sexo</Text>
      <Button
        title="Go back"
        onPress={() => navigation.navigate('Home')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default BarbersScreen;
