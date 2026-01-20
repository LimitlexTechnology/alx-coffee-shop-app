import { View, Text, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../constants";

export default function Home() {
  return (
    <View
      className="flex-1 items-center justify-center gap-6 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <Image
        source={require("../assets/images/Image Onboarding.png")}
        className="w-64 h-64"
        resizeMode="contain"
      />
      <View className="items-center gap-2">
        <Text className="text-3xl font-bold text-amber-900">
          Coffee Shop
        </Text>
        <Text className="text-base text-stone-500 text-center">
          Discover and order your favorite coffee with a smooth experience.
        </Text>
      </View>
      <PrimaryButton title="Get Started" />
    </View>
  );
}
