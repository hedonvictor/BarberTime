import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula um tempo de carregamento
    setTimeout(() => {
      // Redireciona para a tela de login
      navigation.replace('LoginScreen');
    }, 3000); // 3 segundos de carregamento
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Imagem de carregamento */}
      <Image
        source={require('../../assets/logo.png')} // Substitua por seu caminho de imagem
        style={styles.logo}
      />
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004E98',
  },
  logo: {
    width: 300,  // Defina a largura da imagem
    height: 300, // Defina a altura da imagem
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff',
  },
});

export default WelcomeScreen;
