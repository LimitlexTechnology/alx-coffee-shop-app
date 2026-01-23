import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';

const PromoBanner = () => {
    const { width } = useWindowDimensions();
    const isLargeScreen = width >= 768;
    
    return (
        <View className={`mx-6 mt-6 mb-6 rounded-2xl overflow-hidden relative bg-coffee-dark self-center w-full max-w-[1024px] ${isLargeScreen ? 'h-56' : 'h-40'}`}>
            {/* Background Image Placeholder - In a real app this would be an Image component covering the background */}
            {/* Since we don't have the exact asset, we simulate the look with a view and colors or a generic image if available */}
            <View className="absolute inset-0 bg-coffee-dark" />

            {/* Content */}
            <View className="p-4 z-10 flex-1 justify-center">
                <View className={`bg-red-500 rounded-lg px-2 py-1 self-start mb-2 ${isLargeScreen ? 'mb-4' : 'mb-2'}`}>
                    <Text className={`text-white font-bold ${isLargeScreen ? 'text-sm' : 'text-xs'}`}>Promo</Text>
                </View>

                {/* Decorative elements would go here */}
                <View className="flex-1 relative">
                    <Text className={`text-white font-bold bg-transparent z-20 ${isLargeScreen ? 'text-3xl' : 'text-2xl'}`}>Buy one get{'\n'}one FREE</Text>
                </View>
            </View>

            {/* Decorative Image (Right Side) */}
            <View className="absolute right-0 top-0 bottom-0 w-1/2">
                {/* Using a placeholder or the onboarding image if consistent, 
             but typically this would be a specific banner asset. 
             For now, we'll try to rely on a solid color or gradient effect if no image.
         */}
                <View className="flex-1 bg-coffee-secondary opacity-20" />
            </View>
        </View>
    );
};

export default PromoBanner;
