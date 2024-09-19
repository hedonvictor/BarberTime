import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfoCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Explore as barbearias disponíveis na sua região e faça seu agendamento de forma rápida e fácil.
      </Text>
      <Ionicons name="storefront-outline" size={40} color="#000" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#c9c8c5', // Cor de fundo alterada
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1, // Borda
    borderColor: '#999', // Cor da borda
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Sombra no Android
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    fontWeight: '500', // Deixar o texto mais destacado
  },
  icon: {
    marginLeft: 10,
  },
});

export default InfoCard;

