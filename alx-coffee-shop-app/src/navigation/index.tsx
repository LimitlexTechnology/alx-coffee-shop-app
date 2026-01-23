import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import CoffeeOnboardingScreen from '../screens/CoffeeOnboardingScreen';
import Home from '../screens/Home';
import DetailItem from '../screens/DetailItem';
import Order from '../screens/Order'; // Acts as Cart
import Orders from '../screens/Orders'; // Order History
import Delivery from '../screens/Delivery';
import Favorites from '../screens/Favorites';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile'; // Profile Placeholder
import { colors } from '../constants';
import { Coffee } from '../types';

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  Details: { coffee: Coffee };
  Order: undefined; // Cart
  Delivery: undefined;
};

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Cart: undefined;
  Orders: undefined;
  Profile: undefined;
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
          elevation: 10, // Shadow
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 80, // Taller bar
          paddingTop: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            // Bag or Cart icon
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'receipt' : 'receipt-outline'; // or notifications if preferred
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Use the primary color for active, muted for inactive (passed as color prop if configured, or manual)
          return <Ionicons name={iconName} size={24} color={focused ? colors.primary : '#D8D8D8'} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Order} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={CoffeeOnboardingScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Details" component={DetailItem} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

