import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../constants';

export default function Notifications() {
  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: colors.background }}>
      <Text className="text-xl font-bold text-amber-900">Notifications Screen</Text>
    </View>
  );
}
