import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

//components
import BarberShopCard from './components/BarberShopCard';
import InfoCard from './components/InfoCard';

//imgtest
import barberimg from '../../assets/ebony.png'
import barberimg2 from '../../assets/logo.png'

const barberShops = [
  { id: '1', name: 'Barbearia A', rating: 4.5, distance: '1,8km', image: barberimg },
  { id: '2', name: 'Barbearia B', rating: 4.9, distance: '2km', image: barberimg2 }
]

const BarbersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <InfoCard/>
      <FlatList
        data={barberShops}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BarberShopCard name={item.name} rating={item.rating} image={item.image} distance={item.distance} />
        )}
      />
      <Button
        title="Voltar para home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default BarbersScreen;
