import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";

import Onboarding from "../screens/Onboarding";
import Details from "../screens/Details";
import Order from "../screens/Order";
import Delivery from "../screens/Delivery";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Delivery" component={Delivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
