import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import { RootStackParamList } from '../navigation';

type DeliveryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Delivery'>;

export default function Delivery() {
   const navigation = useNavigation<DeliveryScreenNavigationProp>();

   return (
      <View className="flex-1 bg-white">
         <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

         {/* Map Placeholder */}
         <View className="flex-1 bg-gray-300 relative">
            <View className="absolute inset-0 bg-gray-200" />

            {/* Simulated route markers */}
            <View className="absolute top-24 left-12">
               <View className="w-6 h-6 bg-coffee-primary rounded-full border-4 border-white" />
            </View>
            <View className="absolute top-44 right-16">
               <Ionicons name="location" size={32} color="#C67C4E" />
            </View>

            {/* Back Button */}
            <SafeAreaView edges={['top']} className="absolute top-0 left-0">
               <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="ml-4 mt-2 w-11 h-11 bg-white rounded-xl items-center justify-center shadow-md"
               >
                  <Ionicons name="arrow-back" size={20} color="#303336" />
               </TouchableOpacity>
            </SafeAreaView>

            {/* GPS/Location Button */}
            <SafeAreaView edges={['top']} className="absolute top-0 right-0">
               <TouchableOpacity className="mr-4 mt-2 w-11 h-11 bg-white rounded-xl items-center justify-center shadow-md">
                  <Ionicons name="navigate-circle-outline" size={24} color="#303336" />
               </TouchableOpacity>
            </SafeAreaView>
         </View>

         {/* Bottom Card */}
         <View className="bg-white rounded-t-3xl px-6 pt-4 pb-8 shadow-2xl" style={{ elevation: 20 }}>
            {/* Drag Indicator */}
            <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-4" />

            {/* Timer & Address */}
            <View className="items-center mb-4">
               <Text className="text-base font-bold text-coffee-text mb-1">10 minutes left</Text>
               <Text className="text-xs text-coffee-muted mb-3">
                  Delivery to <Text className="font-semibold text-coffee-text">Jl. Kpg Sutoyo</Text>
               </Text>

               {/* Progress Bar */}
               <View className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <View className="w-3/4 h-full bg-green-500 rounded-full" />
               </View>
            </View>

            {/* Delivery Status Card */}
            <View className="bg-white border border-gray-200 rounded-2xl p-4 mb-4 flex-row items-start">
               <View className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center mr-3">
                  <Ionicons name="cube-outline" size={24} color="#C67C4E" />
               </View>
               <View className="flex-1">
                  <Text className="text-sm font-bold text-coffee-text mb-1">Delivered your order</Text>
                  <Text className="text-xs text-coffee-muted leading-4">
                     We will deliver your goods to you in the shortest possible time.
                  </Text>
               </View>
            </View>

            {/* Driver Info */}
            <View className="flex-row items-center bg-white">
               <View className="w-16 h-16 rounded-2xl overflow-hidden mr-3 bg-gray-200">
                  <Image
                     source={require('../assets/images/Image Onboarding.png')}
                     className="w-full h-full"
                     resizeMode="cover"
                  />
               </View>

               <View className="flex-1">
                  <Text className="text-base font-bold text-coffee-text">Brooklyn Simmons</Text>
                  <Text className="text-xs text-coffee-muted">Personal Courier</Text>
               </View>

               <TouchableOpacity className="w-12 h-12 bg-white border border-gray-300 rounded-xl items-center justify-center">
                  <Ionicons name="call" size={20} color="#303336" />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   );
}
