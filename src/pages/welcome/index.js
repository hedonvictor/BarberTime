import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={['#353535', '#1a1a1a']} // Gradiente do fundo
        style={StyleSheet.absoluteFillObject} // Faz o gradiente preencher o container
      />
      {/* Imagem de carregamento */}
      <Image
        source={require('../../assets/logo2.png')} // Substitua por seu caminho de imagem
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
    // backgroundColor: '#004E98', // Removido, pois o gradiente será o fundo
  },
  logo: {
    width: 400,  // Defina a largura da imagem
    height: 400, // Defina a altura da imagem
    marginBottom: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#ffffff',
  },
});

export default WelcomeScreen;
