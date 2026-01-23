import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { Coffee } from '../types';

interface CoffeeCardProps {
    item: Coffee;
    onPress: () => void;
    onAddToCart: () => void;
    numColumns?: number;
}

const CoffeeCard = ({ item, onPress, onAddToCart, numColumns = 2 }: CoffeeCardProps) => {
    const { width } = useWindowDimensions();

    // Calculate width based on columns and padding
    // Padding: 24 on each side = 48
    // Gap: 16 between cards
    const totalHorizontalPadding = 48 + (numColumns - 1) * 16;
    const cardWidth = (Math.min(width, 1024) - totalHorizontalPadding) / numColumns;

    return (
        <TouchableOpacity
            className="bg-white rounded-2xl p-2 mb-4 shadow-sm"
            style={{ width: cardWidth }}
            onPress={onPress}
        >
            <View className="relative">
                <Image
                    source={item.image}
                    className="w-full h-32 rounded-xl mb-3"
                    resizeMode="cover"
                />
                {/* Rating Badge */}
                <View className="absolute top-0 right-0 bg-black/50 rounded-bl-2xl rounded-tr-xl px-2 py-1 flex-row items-center">
                    <Ionicons name="star" size={10} color="#FBBE21" />
                    <Text className="text-white text-[10px] font-bold ml-1">{item.rating}</Text>
                </View>
            </View>

            <View className="px-1 pb-1">
                <Text className="text-base font-bold text-coffee-text mb-0.5" numberOfLines={1}>{item.name}</Text>
                <Text className="text-xs text-coffee-muted mb-3" numberOfLines={1}>{item.type}</Text>

                <View className="flex-row justify-between items-center">
                    <Text className="text-base font-bold text-coffee-text">
                        $ {item.price.toFixed(2)}
                    </Text>
                    <TouchableOpacity
                        className="bg-coffee-primary rounded-xl w-8 h-8 justify-center items-center"
                        onPress={onAddToCart}
                    >
                        <Ionicons name="add" size={16} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CoffeeCard;
