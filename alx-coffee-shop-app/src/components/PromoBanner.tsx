import React from 'react';
import { View, Text } from 'react-native';

const PromoBanner = () => {
    return (
        <View className="mx-6 mt-6 mb-6 rounded-2xl overflow-hidden h-36 relative bg-coffee-dark">
            <View className="absolute inset-0 bg-coffee-dark" />

            <View className="p-4 z-10 flex-1 justify-center">
                <View className="bg-red-500 rounded-lg px-2 py-1 self-start mb-2">
                    <Text className="text-white text-xs font-bold">Promo</Text>
                </View>

                <View className="flex-1 relative">
                    <Text className="text-white text-2xl font-bold">Buy one get{'\n'}one FREE</Text>
                </View>
            </View>

            <View className="absolute right-0 top-0 bottom-0 w-1/2">
                <View className="flex-1 bg-coffee-secondary opacity-20" />
            </View>
        </View>
    );
};

export default PromoBanner;
