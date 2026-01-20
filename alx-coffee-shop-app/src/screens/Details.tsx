import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
import { colors } from "../constants";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

export default function Details() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<DetailsScreenRouteProp>();
  const { coffee } = route.params;
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(coffee, selectedSize);
    navigation.navigate("Order");
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center px-6 py-4">
           <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
           </TouchableOpacity>
           <Text className="text-lg font-bold text-stone-800">Detail</Text>
           <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="black" />
           </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6">
           <Image 
             source={coffee.image} 
             className="w-full h-64 rounded-2xl mb-6"
             resizeMode="cover"
           />
           
           <View className="mb-4">
             <Text className="text-2xl font-bold text-stone-800 mb-1">{coffee.name}</Text>
             <Text className="text-stone-500 mb-2">{coffee.type}</Text>
             <View className="flex-row items-center gap-1">
                <Ionicons name="star" size={16} color="#fbbf24" />
                <Text className="text-lg font-bold text-stone-800">{coffee.rating}</Text>
                <Text className="text-stone-400">(230)</Text>
             </View>
           </View>

           <View className="h-[1px] bg-stone-200 mb-4" />

           <View className="mb-4">
             <Text className="text-lg font-bold text-stone-800 mb-2">Description</Text>
             <Text className="text-stone-500 leading-6">
               {coffee.description}
             </Text>
           </View>

           <View className="mb-6">
             <Text className="text-lg font-bold text-stone-800 mb-3">Size</Text>
             <View className="flex-row gap-4">
               {(['S', 'M', 'L'] as const).map((size) => (
                 <TouchableOpacity 
                   key={size}
                   onPress={() => setSelectedSize(size)}
                   className={`flex-1 py-2 rounded-lg border items-center ${
                     selectedSize === size 
                       ? 'bg-amber-50 border-amber-900' 
                       : 'bg-white border-stone-200'
                   }`}
                 >
                   <Text className={`${
                     selectedSize === size ? 'text-amber-900 font-bold' : 'text-stone-800'
                   }`}>{size}</Text>
                 </TouchableOpacity>
               ))}
             </View>
           </View>
        </ScrollView>

        <View className="px-6 py-4 border-t border-stone-100 bg-white flex-row items-center justify-between shadow-lg">
           <View>
             <Text className="text-stone-400">Price</Text>
             <Text className="text-xl font-bold text-amber-900">$ {coffee.price.toFixed(2)}</Text>
           </View>
           <TouchableOpacity 
             className="bg-amber-900 px-8 py-4 rounded-2xl"
             onPress={handleAddToCart}
           >
             <Text className="text-white font-bold text-lg">Buy Now</Text>
           </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
