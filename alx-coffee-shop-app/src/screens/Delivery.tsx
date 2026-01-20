import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../constants';
import { RootStackParamList } from '../navigation';

type DeliveryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Delivery'>;

export default function Delivery() {
  const navigation = useNavigation<DeliveryScreenNavigationProp>();

  return (
    <View className="flex-1 bg-stone-100">
      {/* Map Placeholder */}
      <View className="flex-1 bg-stone-300 items-center justify-center relative">
         <Image 
            source={require('../assets/images/Image Onboarding.png')} 
            className="w-full h-full opacity-30"
            resizeMode="cover"
         />
         <View className="absolute top-12 left-6">
            <TouchableOpacity onPress={() => navigation.navigate('Main')} className="bg-white p-2 rounded-xl shadow-sm">
               <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
         </View>
         <View className="absolute top-12 right-6">
            <TouchableOpacity className="bg-white p-2 rounded-xl shadow-sm">
               <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
         </View>
      </View>

      {/* Bottom Sheet */}
      <View className="bg-white rounded-t-3xl px-6 py-8 -mt-6">
         <View className="items-center mb-6">
            <View className="w-12 h-1 bg-stone-300 rounded-full mb-4" />
            <Text className="text-lg font-bold text-stone-800">10 minutes left</Text>
            <Text className="text-stone-400 text-sm">Delivery to <Text className="text-stone-800 font-bold">Jl. Kpg Sutoyo</Text></Text>
            <View className="flex-row mt-4 w-full h-1 bg-stone-100 rounded-full overflow-hidden">
               <View className="w-3/4 bg-green-500 h-full rounded-full" />
            </View>
         </View>

         {/* Delivery Info */}
         <View className="flex-row items-center border border-stone-200 rounded-xl p-4 mb-6">
            <View className="border border-green-500 p-3 rounded-xl mr-4">
               <Ionicons name="bicycle" size={24} color={colors.primary} />
            </View>
            <View className="flex-1">
               <Text className="text-base font-bold text-stone-800">Delivered your order</Text>
               <Text className="text-stone-400 text-sm">We deliver your goods to you in the shortes possible time.</Text>
            </View>
         </View>

         {/* Courier Info */}
         <View className="flex-row items-center">
            <Image 
               source={require('../assets/images/Image Onboarding.png')} 
               className="w-14 h-14 rounded-xl mr-4"
            />
            <View className="flex-1">
               <Text className="text-lg font-bold text-stone-800">Johan Hawn</Text>
               <Text className="text-stone-400 text-sm">Personal Courier</Text>
            </View>
            <TouchableOpacity className="border border-stone-300 p-3 rounded-xl">
               <Ionicons name="call-outline" size={24} color="black" />
            </TouchableOpacity>
         </View>
      </View>
    </View>
  );
}
