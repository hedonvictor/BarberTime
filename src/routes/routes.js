import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false, }} >
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
        <Stack.Screen
          name="Home" 
          component={BottomTabsNavigator}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={25} color="#000" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })} />

        {/* Rotas ok */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
