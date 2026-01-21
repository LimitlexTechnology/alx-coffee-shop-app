import { View, Text, Image } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from "nativewind";
import { StatusBar } from "expo-status-bar";

cssInterop(LinearGradient, {
  className: "style",
});

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export default function Onboarding() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />
      {/* Background Image - Full Screen */}
      <View className="w-full h-full absolute inset-0">
        <Image
          source={require("../assets/images/Image Onboarding.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Content Container - Bottom Overlay with Gradient */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)', 'black']}
        locations={[0, 0.4, 0.8]}
        className="flex-1 justify-end pb-10 px-6 gap-6 absolute bottom-0 w-full h-[45%]"
      >
        <View className="items-center gap-3">
          <Text className="text-4xl font-semibold text-white text-center leading-tight">
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text className="text-base text-[#B0B0B0] text-center px-4 leading-relaxed">
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>
        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.replace('Main')}
          style="bg-[#C67C4E] shadow-xl shadow-black h-[54px] justify-center"
        />
      </LinearGradient>
    </View>
  );
}
