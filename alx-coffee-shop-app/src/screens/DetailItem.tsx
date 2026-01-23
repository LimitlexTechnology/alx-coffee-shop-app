import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, useWindowDimensions } from 'react-native';
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
   const [showFullDescription, setShowFullDescription] = useState(false);
   const addToCart = useStore((state) => state.addToCart);
   const toggleFavorite = useStore((state) => state.toggleFavorite);
   const favorites = useStore((state) => state.favorites);

   const isFavorite = favorites.includes(coffee.id);
   const { width } = useWindowDimensions();
   const isLargeScreen = width >= 768;

   const handleAddToCart = () => {
      addToCart(coffee, selectedSize);
      navigation.navigate('Order');
   };

   const truncatedDescription = coffee.description.slice(0, 120) + "...";

   return (
      <View className="flex-1 bg-white items-center">
         <StatusBar barStyle="dark-content" backgroundColor="white" />

         <View style={{ width: '100%', maxWidth: 1024, flex: 1 }}>
            {/* Header */}
            <SafeAreaView edges={['top']} className="bg-white">
               <View className="flex-row items-center justify-between px-6 py-4">
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <Ionicons name="arrow-back" size={24} color="#2F2D2C" />
                  </TouchableOpacity>
                  <Text className="text-lg font-semibold text-coffee-text">Detail</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(coffee.id)}>
                     <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={24}
                        color={isFavorite ? "#C67C4E" : "#2F2D2C"}
                     />
                  </TouchableOpacity>
               </View>
            </SafeAreaView>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
               <View className={`px-6 ${isLargeScreen ? 'flex-row gap-8 py-6' : ''}`}>
                  {/* Product Image */}
                  <View className={`${isLargeScreen ? 'flex-1' : 'mb-4'}`}>
                     <View className={`w-full ${isLargeScreen ? 'aspect-square' : 'h-56'} rounded-2xl overflow-hidden bg-coffee-dark`}>
                        <Image
                           source={coffee.image}
                           className="w-full h-full"
                           resizeMode="cover"
                        />
                     </View>
                  </View>

                  <View className={`${isLargeScreen ? 'flex-1' : ''}`}>
                     {/* Product Name & Type */}
                     <Text className="text-xl font-bold text-coffee-text mb-1">{coffee.name}</Text>
                     <Text className="text-sm text-coffee-muted mb-3">Ice/Hot</Text>

                     {/* Rating & Feature Icons */}
                     <View className="flex-row items-center justify-between mb-5">
                        <View className="flex-row items-center gap-1">
                           <Ionicons name="star" size={20} color="#FBBE21" />
                           <Text className="text-base font-semibold text-coffee-text">{coffee.rating}</Text>
                           <Text className="text-sm text-coffee-muted">(230)</Text>
                        </View>

                        <View className="flex-row gap-3">
                           <View className="bg-coffee-secondary w-11 h-11 rounded-xl items-center justify-center">
                              <Ionicons name="cafe-outline" size={20} color="#C67C4E" />
                           </View>
                           <View className="bg-coffee-secondary w-11 h-11 rounded-xl items-center justify-center">
                              <Ionicons name="water-outline" size={20} color="#C67C4E" />
                           </View>
                           <View className="bg-coffee-secondary w-11 h-11 rounded-xl items-center justify-center">
                              <Ionicons name="bag-outline" size={20} color="#C67C4E" />
                           </View>
                        </View>
                     </View>

                     <View className="h-px bg-coffee-gray mb-4" />

                     {/* Description */}
                     <View className="mb-5">
                        <Text className="text-base font-semibold text-coffee-text mb-3">Description</Text>
                        <Text className="text-sm text-coffee-muted leading-5">
                           {showFullDescription ? coffee.description : truncatedDescription}
                           {!showFullDescription && (
                              <Text
                                 className="text-coffee-primary font-semibold"
                                 onPress={() => setShowFullDescription(true)}
                              >
                                 {" "}Read More
                              </Text>
                           )}
                        </Text>
                     </View>

                     {/* Size Selection */}
                     <View className="mb-10">
                        <Text className="text-base font-semibold text-coffee-text mb-3">Size</Text>
                        <View className="flex-row justify-between gap-3">
                           {(['S', 'M', 'L'] as const).map((size) => (
                              <TouchableOpacity
                                 key={size}
                                 className={`flex-1 py-3 rounded-xl border items-center justify-center ${selectedSize === size
                                    ? 'bg-coffee-secondary/30 border-coffee-primary'
                                    : 'bg-white border-coffee-gray'
                                    }`}
                                 onPress={() => setSelectedSize(size)}
                              >
                                 <Text className={`text-sm font-semibold ${selectedSize === size ? 'text-coffee-text' : 'text-coffee-muted'
                                    }`}>
                                    {size}
                                 </Text>
                              </TouchableOpacity>
                           ))}
                        </View>
                     </View>
                  </View>
               </View>
            </ScrollView>

            {/* Bottom Action Bar */}
            <SafeAreaView edges={['bottom']} className="bg-white">
               <View className="px-6 py-4 flex-row items-center justify-between border-t border-coffee-gray/30">
                  <View>
                     <Text className="text-sm text-coffee-muted mb-1">Price</Text>
                     <Text className="text-lg font-bold text-coffee-primary">$ {coffee.price.toFixed(2)}</Text>
                  </View>
                  <TouchableOpacity
                     className="bg-coffee-primary px-16 py-4 rounded-2xl"
                     onPress={handleAddToCart}
                  >
                     <Text className="text-white font-semibold text-base">Buy Now</Text>
                  </TouchableOpacity>
               </View>
            </SafeAreaView>
         </View>
      </View>
   );
}
