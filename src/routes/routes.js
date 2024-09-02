import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das telas
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../pages/login';
import RegisterScreen from '../pages/register';
import WelcomeScreen from '../pages/welcome/index';  // Importando a WelcomeScreen
import UserProfileScreen from '../pages/profile/index'; // Importando a UserProfileScreen

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfileScreen">
        {/* Tela de perfil do usuário */}
        <Stack.Screen 
          name="UserProfileScreen" 
          component={UserProfileScreen} 
          options={{ headerShown: false }} // Esconde o header na tela de perfil do usuário
        />

        {/* Tela de carregamento */}
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Esconde o header na tela de carregamento
        />

        {/* Rota que ainda necessita receber proteção */}
        <Stack.Screen name="Home" component={BottomTabsNavigator} />

        {/* Rotas ok */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
