
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das telas
import HomeScreen from './pages/home/index';
import BarbersScreen from './pages/barberShops';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> {/* definição da tela inicial */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Barbers" component={BarbersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;