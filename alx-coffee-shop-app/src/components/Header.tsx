import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
    return (
        <View className="px-6 pt-4 pb-6 bg-coffee-header">
            <View className="mb-6">
                <Text className="text-stone-400 text-xs mb-1">Location</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-white font-semibold text-sm mr-1">Bilzen, Tanjungbalai</Text>
                    <Ionicons name="chevron-down" size={14} color="white" />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center gap-4">
                <View className="flex-1 flex-row items-center bg-coffee-dark rounded-2xl px-4 h-12">
                    <Ionicons name="search" size={20} color="white" />
                    <TextInput
                        placeholder="Search coffee"
                        placeholderTextColor="#989898"
                        className="flex-1 ml-3 text-white text-sm"
                    />
                </View>

                <TouchableOpacity className="bg-coffee-primary w-12 h-12 rounded-xl justify-center items-center">
                    <Ionicons name="options" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
