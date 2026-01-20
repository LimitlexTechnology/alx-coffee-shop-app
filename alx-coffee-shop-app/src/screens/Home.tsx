import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from "../constants";
import { coffeeData, categories } from "../data/coffee";
import { RootStackParamList } from "../navigation";
import { Coffee } from "../types";
import { useStore } from "../store/useStore";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [activeCategory, setActiveCategory] = useState('All Coffee');
  const addToCart = useStore((state) => state.addToCart);

  const filteredCoffee = activeCategory === 'All Coffee' 
    ? coffeeData 
    : coffeeData.filter(item => item.category === activeCategory);

  const renderItem = ({ item }: { item: Coffee }) => (
    <TouchableOpacity
      className="bg-white rounded-xl p-3 mb-4 w-[48%] shadow-sm"
      onPress={() => navigation.navigate("Details", { coffee: item })}
    >
      <Image
        source={item.image}
        className="w-full h-32 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold text-stone-800">{item.name}</Text>
      <Text className="text-xs text-stone-500 mb-1">{item.type}</Text>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-base font-bold text-amber-900">
          $ {item.price.toFixed(2)}
        </Text>
        <TouchableOpacity 
          className="bg-amber-900 rounded-full p-1"
          onPress={() => addToCart(item, 'M')}
        >
           <Ionicons name="add" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <View className="px-6 pt-2 pb-4 flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
           <View>
              <Text className="text-stone-400 text-sm">Location</Text>
              <Text className="text-stone-800 font-bold text-base">Bilzen, Tanjungbalai</Text>
           </View>
           <Image 
              source={require("../assets/images/Image Onboarding.png")} 
              className="w-10 h-10 rounded-lg" 
           />
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-stone-100 rounded-xl px-4 py-2 mb-6">
           <Ionicons name="search" size={20} color={colors.mutedText} />
           <TextInput 
              placeholder="Search coffee" 
              className="flex-1 ml-2 text-stone-800"
              placeholderTextColor={colors.mutedText}
           />
           <Ionicons name="filter" size={20} color={colors.primary} />
        </View>

        {/* Banner */}
        <View className="flex-row items-center bg-stone-800 rounded-2xl p-4 mb-6 relative overflow-hidden h-36">
           <View className="flex-1 z-10 justify-center h-full">
              <View className="bg-red-500 rounded-lg px-2 py-1 self-start mb-2">
                <Text className="text-white text-xs font-bold">Promo</Text>
              </View>
              <Text className="text-white text-2xl font-bold mb-2">Buy one get{"\n"}one FREE</Text>
           </View>
           {/* Placeholder for banner image */}
           <View className="absolute right-0 top-0 w-32 h-full bg-stone-700 opacity-50" />
        </View>

        {/* Categories */}
        <View className="mb-6 h-10">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
              {categories.map((cat, index) => (
                 <TouchableOpacity 
                   key={index} 
                   className={`px-4 py-2 rounded-lg ${activeCategory === cat ? 'bg-amber-900' : 'bg-white'}`}
                   onPress={() => setActiveCategory(cat)}
                 >
                    <Text className={`font-semibold ${activeCategory === cat ? 'text-white' : 'text-stone-600'}`}>
                       {cat}
                    </Text>
                 </TouchableOpacity>
              ))}
           </ScrollView>
        </View>

        {/* Coffee List */}
        <FlatList
          data={filteredCoffee}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}
