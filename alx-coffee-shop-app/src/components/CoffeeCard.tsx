import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { Coffee } from '../types';

interface CoffeeCardProps {
    item: Coffee;
    onPress: () => void;
    onAddToCart: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48 - 16) / 2;

const CoffeeCard = ({ item, onPress, onAddToCart }: CoffeeCardProps) => {
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
