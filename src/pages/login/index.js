import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={['#353535', '#1a1a1a']} // Degradê do fundo
        style={StyleSheet.absoluteFillObject} // Faz o degradê preencher o container
      />
      <Animatable.View
        animation="flipInY"
        duration={1500}
        style={styles.logoContainer}
      >
        <Image
          source={require('../../assets/logo2.png')}
          style={styles.logo}
        />
      </Animatable.View>
      
      <Animatable.View delay={1000} animation="fadeInUp" style={styles.inputContainer}>
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
        <LinearGradient
          colors={['#cbea68', '#6aa84f']}
          style={styles.button}
        >
          <TouchableOpacity style={styles.buttonInner} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#cbea68', '#6aa84f']}
          style={[styles.button, styles.registerButton]}
        >
          <TouchableOpacity style={styles.buttonInner} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.buttonText}>Registrar-me</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    // backgroundColor: '#353535', // Removido, pois o degradê será o fundo
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -300, // Ajuste a margem inferior para garantir que o formulário fique bem abaixo da logo
  },
  logo: {
    marginBottom: 260,
    width: 400, // Ajuste o tamanho conforme necessário
    height: 400, // Ajuste o tamanho conforme necessário
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20, // Garantir que o formulário fique abaixo da logo
  },
  input: {
    height: 40,
    borderColor: '#2b3213', // Cor da borda ajustada
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10, // Aumentar o espaço entre os campos de entrada
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    width: '70%',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 8,
    marginBottom: 8,
    width: '70%',
    height: 40, // Diminuído para melhor proporção
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Diminuído para melhor proporção
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    marginBottom: 20, // Ajuste a margem inferior para o botão de registro
  },
});

export default LoginScreen;
