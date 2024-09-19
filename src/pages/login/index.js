import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Usuário:', data.username);
    console.log('Senha:', data.password);
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
        <Controller
          control={control}
          rules={{ required: true }}
          name="username"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.username && <Text style={styles.errorText}>Usuário é obrigatório.</Text>}

        <Controller
          control={control}
          rules={{ required: true, minLength: 8 }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>Senha é obrigatória e deve ter pelo menos 8 caracteres.</Text>}

        <LinearGradient
          colors={['#cbea68', '#6aa84f']}
          style={styles.button}
        >
          <TouchableOpacity style={styles.buttonInner} onPress={handleSubmit(onSubmit)}>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -300,
  },
  logo: {
    marginBottom: 260,
    width: 400,
    height: 400,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#2b3213',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    width: '70%',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 8,
    marginBottom: 8,
    width: '70%',
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
