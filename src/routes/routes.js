import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação da tela HomeScreen
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../pages/login';
import RegisterScreen from '../pages/register';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Rota que ainda necessita receber proteção */}
        <Stack.Screen name="Home" component={BottomTabsNavigator} />

        {/* Rotas ok */}
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
