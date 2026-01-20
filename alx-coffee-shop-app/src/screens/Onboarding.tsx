import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../constants";
import { RootStackParamList } from "../navigation/types";

export default function Onboarding() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      className="flex-1 items-center justify-center gap-6 px-6"
      style={{ backgroundColor: colors.background }}
    >
      <Image
        source={require("../assets/images/Image Onboarding.png")}
        className="w-full h-2/3"
        resizeMode="contain"
      />
      <View className="items-center gap-2">
        <Text className="text-3xl font-bold text-amber-900 text-center">
          Coffee so good, your taste buds will love it.
        </Text>
        <Text className="text-base text-stone-500 text-center px-4">
          The best grain, the finest roast, the powerful flavor.
        </Text>
      </View>
      <View className="w-full px-4">
        <PrimaryButton title="Get Started" onPress={() => navigation.replace("MainTabs")} />
      </View>
    </View>
  );
}
