import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../constants";

export default function Delivery() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 z-10">
         <View className="absolute top-14 left-6 z-20">
            <TouchableOpacity 
               className="bg-white p-2 rounded-lg shadow-sm"
               onPress={() => navigation.navigate("MainTabs")}
            >
               <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
         </View>
         
         {/* Map Placeholder */}
         <View className="flex-1 w-full relative">
            <Image 
               source={require("../assets/images/Maps.png")} 
               className="w-full h-full"
               resizeMode="cover"
            />
         </View>

         {/* Bottom Sheet Info */}
         <View className="bg-white rounded-t-3xl -mt-10 pt-4 px-6 pb-8 shadow-2xl">
            <View className="w-12 h-1 bg-stone-300 rounded-full self-center mb-6" />
            
            <Text className="text-lg font-bold text-center mb-2">10 minutes left</Text>
            <Text className="text-stone-500 text-center mb-6">Delivery to <Text className="font-bold text-stone-800">Jl. Kpg Sutoyo</Text></Text>
            
            <View className="flex-row items-center gap-4 mb-6">
               <View className="flex-1 h-1 bg-green-500 rounded-full" />
               <View className="flex-1 h-1 bg-green-500 rounded-full" />
               <View className="flex-1 h-1 bg-green-500 rounded-full" />
               <View className="flex-1 h-1 bg-stone-200 rounded-full" />
            </View>

            <View className="bg-white border border-stone-200 rounded-xl p-4 flex-row items-center gap-4">
               <View className="border border-stone-200 rounded-lg p-1">
                  <Image 
                    source={require("../assets/images/Image Onboarding.png")} 
                    className="w-12 h-12 rounded-lg"
                  />
               </View>
               <View className="flex-1">
                  <Text className="font-bold text-stone-800 text-base">Delivered your order</Text>
                  <Text className="text-stone-500 text-sm">We deliver your goods to you in the shortest possible time.</Text>
               </View>
            </View>

            <View className="flex-row items-center mt-6 gap-4">
               <Image 
                 source={require("../assets/images/Image Onboarding.png")} 
                 className="w-14 h-14 rounded-xl"
               />
               <View className="flex-1">
                  <Text className="font-bold text-stone-800 text-lg">Johan Hawn</Text>
                  <Text className="text-stone-500">Personal Courier</Text>
               </View>
               <TouchableOpacity className="border border-stone-200 p-3 rounded-xl">
                  <Ionicons name="call-outline" size={24} color="black" />
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
    </View>
  );
}
