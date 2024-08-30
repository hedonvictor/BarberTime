import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Ver barbearias"
        onPress={() => navigation.navigate('Barbers')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;