import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants';

const Profile = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-stone-800">Profile</Text>
            <Text className="text-stone-500 mt-2">User Profile</Text>
        </SafeAreaView>
    );
};

export default Profile;
