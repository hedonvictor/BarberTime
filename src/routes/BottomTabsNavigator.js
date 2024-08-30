import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Import Screens
import HomeScreen from '../pages/home/index';
import ProfileScreen from '../pages/profile';
import SchedulingsClientsScreen from '../pages/schedulingForClients';
import BarbersScreen from '../pages/barberShops'; 


const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'SchedulingClients') {
            iconName = 'calendar';
          } else if (route.name === 'Barbers') {
            iconName = 'storefront';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen}  />
      <Tab.Screen name="SchedulingClients" component={SchedulingsClientsScreen} />
      <Tab.Screen name='Barbers' component={BarbersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
