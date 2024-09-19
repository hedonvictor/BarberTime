import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RebookCard = ({ barbershopImage, service, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>Agende novamente</Text>
        <Image source={barbershopImage} style={styles.image} />
      </View>
      <Text style={styles.service}>{service}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#6aa84f',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '90%'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  service: {
    marginTop: 10,
    fontSize: 14,
    color: '#353535',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#b5e550',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});

export default RebookCard;
