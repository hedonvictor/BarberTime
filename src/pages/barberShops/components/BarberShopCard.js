import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BarberShopCard = ({ image, name, rating, distance }) => {
  return (
    <View style={styles.cardContainer}>
      {/* abaixo como ficara na versão final, utilizando imagem do db */}
      {/* <Image source={{ uri: image }} style={styles.image} /> */} 
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>Avaliação: {rating}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: 'gray',
  },
  distance: {
    fontSize: 16,
    color: 'gray'
  }
});

export default BarberShopCard;