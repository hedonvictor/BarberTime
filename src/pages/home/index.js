import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

//styles
import customBlack from '../../styles/colors'
//components
import SearchBar from './components/SearchBar'
import CardService from './components/ServiceCards';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, ####</Text> 
      <SearchBar />
      <Text style={styles.texts}>Todos os Serviços disponiveis</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.row}>
          <CardService iconName="cut-outline" iconSize={60} iconColor={customBlack} serviceName="Corte"/>
          <CardService iconName="person-circle-outline" iconSize={60} iconColor={customBlack} serviceName="Barba"/>
        </View>
        <View style={styles.row}>
          <CardService iconName="happy-outline" iconSize={60} iconColor={customBlack} serviceName="Luzes"/>
          <CardService iconName="flask-outline" iconSize={60} iconColor={customBlack} serviceName="Progressiva "/>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Barbers')}
      >
        <Text style={styles.buttonText}>AGENDAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;