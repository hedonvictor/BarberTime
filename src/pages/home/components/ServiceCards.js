import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

// Importa o pacote de ícones, você pode usar qualquer biblioteca, aqui está o exemplo com o "react-native-vector-icons"
import Icon from 'react-native-vector-icons/Ionicons';

const CardService = ({ iconName, iconSize , iconColor, serviceName  }) => {
  return (
    <View style={styles.card}>
      {/* Ícone centralizado */}
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.serviceName}>{serviceName}</Text>
    </View>
  );
};

export default CardService;

const styles = StyleSheet.create({
    card: {
      width: 100,        // Definindo o tamanho quadrado do card
      height: 100,
      backgroundColor: '#f0f0f0',  // Cor de fundo do card
      justifyContent: 'center',    // Centralizando o conteúdo no eixo vertical
      alignItems: 'center',        // Centralizando o conteúdo no eixo horizontal
      borderRadius: 10,            // Bordas arredondadas
      shadowColor: '#000',         // Sombra
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,                // Sombra no Android
    },
    serviceName: {
      marginTop: 10, // Espaçamento entre o ícone e o texto
      fontSize: 14,
      textAlign: 'center', // Centraliza o texto abaixo do ícone
    },
  });
  