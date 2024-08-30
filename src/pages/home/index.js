import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

const  HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Ver barbearias"
        onPress={() => navigation.navigate('Barbers')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;