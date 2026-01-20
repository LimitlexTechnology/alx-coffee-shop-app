import { View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  return (
    <View className="flex-1 bg-white items-center justify-center gap-4 px-6">
      <Text className="text-2xl font-bold text-blue-600">Coffee Shop</Text>
      <Text className="text-gray-700">Welcome to the app</Text>
      <PrimaryButton title="Get Started" />
    </View>
  );
}
