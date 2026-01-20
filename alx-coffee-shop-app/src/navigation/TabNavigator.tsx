import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "./types";
import Home from "../screens/Home";
import { View, Text } from "react-native";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../constants";

const Tab = createBottomTabNavigator<MainTabParamList>();

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-stone-800">{title}</Text>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
           height: 70,
           paddingBottom: 10,
           paddingTop: 10,
           backgroundColor: 'white',
           borderTopWidth: 0,
           elevation: 0,
           shadowOpacity: 0
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName} size={24} color={focused ? colors.primary : '#a8a29e'} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" children={() => <PlaceholderScreen title="Favorites" />} />
      <Tab.Screen name="Cart" children={() => <PlaceholderScreen title="Cart" />} />
      <Tab.Screen name="Notifications" children={() => <PlaceholderScreen title="Notifications" />} />
    </Tab.Navigator>
  );
}
