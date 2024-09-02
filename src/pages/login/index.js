import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="flipInY"
        duration={1500} // Ajuste a duração da animação conforme necessário
        style={styles.logoContainer}
      >
        <Image
          source={require('../../assets/logo.png')} // Atualize o caminho da logo conforme necessário
          style={styles.logo}
        />
      </Animatable.View>
      
      <Animatable.View delay={1000}animation="fadeInUp"style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.registerButton]} 
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.buttonText}>Registrar-me</Text>
        </TouchableOpacity>
      </Animatable.View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#004E98',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300, // Ajuste o tamanho da logo conforme necessário
    height: 300,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#000000', // Cor da borda igual ao dos botões
    borderWidth: 1,      // Largura da borda igual ao dos botões
    borderRadius: 8,     // Arredondamento igual ao dos botões
    marginBottom: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff', // Fundo branco para os campos de entrada
    width: '70%', // Ajuste a largura dos campos de entrada conforme necessário
    fontWeight: 'bold', // Certificando-se de que o texto está em negrito
  },
  button: {
    backgroundColor: '#110966', // Fundo branco para os botões
    borderColor: '#000000', // Cor da borda dos botões
    borderWidth: 1,     // Largura da borda dos botões
    borderRadius: 8,    // Arredondamento da borda dos botões
    padding: 10,
    marginBottom: 8,
    alignSelf: 'center',
    width: '70%', // Ajuste a largura dos botões conforme necessário
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff', // Cor do texto dos botões
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginBottom: 5, // Remove o espaço inferior para estar mais próximo do botão "Acessar"
  },
});

export default LoginScreen;
