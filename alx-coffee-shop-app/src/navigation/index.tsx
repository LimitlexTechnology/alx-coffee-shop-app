import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import Onboarding from '../screens/Onboarding';
import Home from '../screens/Home';
import DetailItem from '../screens/DetailItem';
import Order from '../screens/Order';
import Delivery from '../screens/Delivery';
import Favorites from '../screens/Favorites';
import Notifications from '../screens/Notifications';
import { colors } from '../constants';
import { Coffee } from '../types';

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  Details: { coffee: Coffee };
  Order: undefined;
  Delivery: undefined;
};

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Bag: undefined;
  Notifications: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Bag') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName as any} size={24} color={focused ? colors.primary : colors.mutedText} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Bag" component={Order} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Details" component={DetailItem} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
