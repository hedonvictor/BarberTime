import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    const newErrors = {};

    if (!fullName.includes(' ')) {
      newErrors.fullName = 'Por favor, insira seu nome completo.';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Por favor, insira um email válido.';
    }

    if (password.length < 8) {
      newErrors.password = 'A senha deve ter pelo menos 8 caracteres.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não correspondem.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // navegar para a tela de login ou outro comportamento desejado
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#353535', '#1a1a1a']} // degradê do fundo
        style={StyleSheet.absoluteFillObject} // az o degradê preencher o container
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/logo2.png')} style={styles.logo} />
        
        <TextInput
          style={[styles.input, errors.fullName && styles.inputError]}
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
        />
        {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.input, errors.username && styles.inputError]}
          placeholder="Login"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

        <TextInput
          style={[styles.input, errors.password && styles.inputError]}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TextInput
          style={[styles.input, errors.confirmPassword && styles.inputError]}
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

        <LinearGradient
          colors={['#cbea68', '#6aa84f']}
          style={styles.button}
        >
          <TouchableOpacity style={styles.buttonInner} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#2b3213',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  inputError: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    marginBottom: 15,
  },
  button: {
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    height: 40,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterScreen;