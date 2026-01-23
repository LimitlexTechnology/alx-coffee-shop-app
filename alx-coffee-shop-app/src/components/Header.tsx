import React from 'react';
import { View, Text, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, spacing } from '../constants';

const Header = () => {
    const { width } = useWindowDimensions();
    const isLargeScreen = width >= 768;
    
    return (
        <View className="px-6 pt-4 pb-6 bg-coffee-header">
            {/* Location Section */}
            <View className="mb-6">
                <Text className="text-stone-400 text-xs mb-1">Location</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-white font-semibold text-sm mr-1">Bilzen, Tanjungbalai</Text>
                    <Ionicons name="chevron-down" size={14} color="white" />
                </TouchableOpacity>
            </View>

            {/* Search & Filter Row */}
            <View className="flex-row items-center gap-4">
                {/* Search Bar */}
                <View className={`flex-1 flex-row items-center bg-coffee-dark rounded-2xl px-4 ${isLargeScreen ? 'h-16' : 'h-12'}`}>
                    <Ionicons name="search" size={isLargeScreen ? 24 : 20} color="white" />
                    <TextInput
                        placeholder="Search coffee"
                        placeholderTextColor="#989898"
                        className={`flex-1 ml-3 text-white ${isLargeScreen ? 'text-base' : 'text-sm'}`}
                    />
                </View>

                {/* Filter Button */}
                <TouchableOpacity className={`bg-coffee-primary ${isLargeScreen ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl justify-center items-center`}>
                    <Ionicons name="options" size={isLargeScreen ? 24 : 20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
