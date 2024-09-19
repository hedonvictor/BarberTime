
import { Text, View } from 'react-native';
import styles from './styles';
import RebookCard from './components/RebookCard'

const SchedulingsClientsScreen = () => {
  return (
    <View style={styles.container}>
      <RebookCard
        barbershopImage={require('../../assets/logo.png')}
        service="Corte navalhado"
        onPress={() => console.log('Agendar novamente')} />
      <Text style={styles.title}>Histórico</Text>
      <Text style={styles.texts}>d it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
    </View>
  );
}

export default SchedulingsClientsScreen;