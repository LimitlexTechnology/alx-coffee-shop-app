import { View, FlatList, StatusBar, Image, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { coffeeData, categories } from "../data/coffee";
import { RootStackParamList } from "../navigation";
import { Coffee } from "../types";
import { useStore } from "../store/useStore";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import Categories from "../components/Categories";
import CoffeeCard from "../components/CoffeeCard";
import { colors } from "../constants";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [activeCategory, setActiveCategory] = useState('All Coffee');
  const addToCart = useStore((state) => state.addToCart);

  const filteredCoffee = activeCategory === 'All Coffee'
    ? coffeeData
    : coffeeData.filter(item => item.category === activeCategory);

  const handleProductPress = (item: Coffee) => {
    navigation.navigate("Details", { coffee: item });
  };

  const handleAddToCart = (item: Coffee) => {
    addToCart(item, 'M');
  };

  return (
    <View className="flex-1 bg-coffee-header">
      <StatusBar barStyle="light-content" backgroundColor="#131313" />
      <SafeAreaView edges={['top']} className="flex-0 bg-coffee-header">
        <Header />
      </SafeAreaView>

      <View className="flex-1 bg-coffee-light">
        <FlatList
          data={filteredCoffee}
          renderItem={({ item }) => (
            <CoffeeCard
              item={item}
              onPress={() => handleProductPress(item)}
              onAddToCart={() => handleAddToCart(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 24 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100, paddingTop: 24 }}
          ListHeaderComponent={() => (
            <View>
              <View className="-mt-8 mb-4">
                <PromoBanner />
              </View>
              <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

