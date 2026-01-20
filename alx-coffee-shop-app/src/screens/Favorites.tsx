import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../constants';

export default function Favorites() {
  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: colors.background }}>
      <Text className="text-xl font-bold text-amber-900">Favorites Screen</Text>
    </View>
  );
}
