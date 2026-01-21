import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { categories } from '../data/coffee';

interface CategoriesProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const Categories = ({ activeCategory, setActiveCategory }: CategoriesProps) => {
    return (
        <View className="mb-6">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
            >
                {categories.map((cat, index) => {
                    const isActive = activeCategory === cat;
                    return (
                        <TouchableOpacity
                            key={index}
                            className={`px-4 py-2 rounded-xl ${isActive ? 'bg-coffee-primary' : 'bg-white'}`}
                            onPress={() => setActiveCategory(cat)}
                        >
                            <Text
                                className={`font-semibold ${isActive ? 'text-white' : 'text-stone-600'}`}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Categories;
