import { View, Text, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export default function Onboarding() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <View 
      className="flex-1 items-center justify-center gap-6 px-6"
      style={{ backgroundColor: "black" }}
    >
      <Image
        source={require("../assets/images/Image Onboarding.png")}
        className="w-full h-2/3 absolute top-0 opacity-80"
        resizeMode="cover"
      />
      <View className="flex-1 justify-end w-full pb-10 gap-4">
        <View className="items-center gap-2">
            <Text className="text-4xl font-bold text-white text-center">Fall in Love with Coffee in Blissful Delight!</Text>
            <Text className="text-base text-gray-300 text-center">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
            </Text>
        </View>
        <PrimaryButton 
            title="Get Started" 
            onPress={() => navigation.replace('Main')}
        />
      </View>
    </View>
  );
}
