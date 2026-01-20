import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../constants';
import { RootStackParamList } from '../navigation';
import { useStore } from '../store/useStore';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailItem() {
  const route = useRoute<DetailScreenRouteProp>();
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const { coffee } = route.params;
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');
  const addToCart = useStore((state) => state.addToCart);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const favorites = useStore((state) => state.favorites);
  
  const isFavorite = favorites.includes(coffee.id);

  const handleAddToCart = () => {
    addToCart(coffee, selectedSize);
    navigation.navigate('Order');
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Image */}
        <View className="relative h-72 w-full">
           <Image 
              source={coffee.image} 
              className="w-full h-full"
              resizeMode="cover"
           />
           <View className="absolute top-12 left-6 right-6 flex-row justify-between items-center">
              <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white/30 backdrop-blur-md p-2 rounded-full">
                 <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-xl font-bold text-white">Detail</Text>
              <TouchableOpacity onPress={() => toggleFavorite(coffee.id)} className="bg-white/30 backdrop-blur-md p-2 rounded-full">
                 <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "white"} />
              </TouchableOpacity>
           </View>
        </View>

        <View className="px-6 pt-6">
           {/* Title & Rating */}
           <View className="mb-4">
              <Text className="text-2xl font-bold text-stone-800">{coffee.name}</Text>
              <Text className="text-stone-500 text-sm mb-2">{coffee.type}</Text>
              <View className="flex-row items-center justify-between">
                 <View className="flex-row items-center gap-1">
                    <Ionicons name="star" size={20} color={colors.secondary} />
                    <Text className="text-lg font-bold text-stone-800">{coffee.rating}</Text>
                    <Text className="text-stone-400 text-sm">(230)</Text>
                 </View>
                 <View className="flex-row gap-4">
                    <View className="bg-stone-100 p-2 rounded-lg">
                       <Ionicons name="bicycle" size={20} color={colors.primary} />
                    </View>
                    <View className="bg-stone-100 p-2 rounded-lg">
                       <Ionicons name="cafe" size={20} color={colors.primary} />
                    </View>
                 </View>
              </View>
           </View>
           
           <View className="h-[1px] bg-stone-200 my-4" />

           {/* Description */}
           <View className="mb-6">
              <Text className="text-lg font-bold text-stone-800 mb-2">Description</Text>
              <Text className="text-stone-500 leading-6">
                 {coffee.description}
              </Text>
           </View>

           {/* Size Selection */}
           <View className="mb-6">
              <Text className="text-lg font-bold text-stone-800 mb-4">Size</Text>
              <View className="flex-row justify-between gap-4">
                 {(['S', 'M', 'L'] as const).map((size) => (
                    <TouchableOpacity
                       key={size}
                       className={`flex-1 py-3 rounded-xl border items-center justify-center ${selectedSize === size ? 'bg-amber-50 border-amber-900' : 'bg-white border-stone-200'}`}
                       onPress={() => setSelectedSize(size)}
                    >
                       <Text className={`font-semibold ${selectedSize === size ? 'text-amber-900' : 'text-stone-600'}`}>
                          {size}
                       </Text>
                    </TouchableOpacity>
                 ))}
              </View>
           </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-stone-100 px-6 py-4 rounded-t-3xl shadow-lg flex-row items-center justify-between">
         <View>
            <Text className="text-stone-400 text-sm">Price</Text>
            <Text className="text-2xl font-bold text-amber-900">$ {coffee.price.toFixed(2)}</Text>
         </View>
         <TouchableOpacity 
            className="bg-amber-900 px-10 py-4 rounded-2xl"
            onPress={handleAddToCart}
         >
            <Text className="text-white font-bold text-lg">Buy Now</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}
