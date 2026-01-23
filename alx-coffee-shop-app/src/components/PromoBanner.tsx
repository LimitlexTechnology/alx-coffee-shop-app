import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';

const PromoBanner = () => {
    const { width } = useWindowDimensions();
    const isLargeScreen = width >= 768;
    
    return (
        <View className={`mx-6 mt-6 mb-6 rounded-2xl overflow-hidden relative bg-coffee-dark self-center w-full max-w-[1024px] ${isLargeScreen ? 'h-56' : 'h-40'}`}>
            {/* Background Coffee Image */}
            <Image 
                source={require('../assets/images/caffe-mocha.png')}
                className="absolute inset-0 w-full h-full opacity-30"
                resizeMode="cover"
            />
            
            {/* Dark overlay for better text contrast */}
            <View className="absolute inset-0 bg-black/40" />

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

            {/* Decorative Coffee Image (Right Side) */}
            <View className="absolute right-0 top-0 bottom-0 w-1/2">
                <Image 
                    source={require('../assets/images/flat-white.png')}
                    className="w-full h-full opacity-60"
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default PromoBanner;
