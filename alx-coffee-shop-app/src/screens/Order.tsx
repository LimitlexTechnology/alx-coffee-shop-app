import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../constants';
import { RootStackParamList } from '../navigation';
import { useStore } from '../store/useStore';
import { CartItem } from '../types';

type OrderScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Order'>;

export default function Order() {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 2.0;
  const total = subtotal + deliveryFee;

  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row items-center bg-white p-4 rounded-xl mb-4 shadow-sm">
      <Image 
        source={item.image} 
        className="w-16 h-16 rounded-lg mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-lg font-bold text-stone-800">{item.name}</Text>
        <Text className="text-stone-500 text-sm mb-1">{item.type} | {item.size}</Text>
        <Text className="text-base font-bold text-amber-900">$ {item.price.toFixed(2)}</Text>
      </View>
      <View className="flex-row items-center gap-3">
         <TouchableOpacity 
           className="border border-stone-300 rounded-full p-1"
           onPress={() => decrementQuantity(item.id, item.size)}
         >
           <Ionicons name="remove" size={16} color={colors.text} />
         </TouchableOpacity>
         <Text className="font-bold text-lg">{item.quantity}</Text>
         <TouchableOpacity 
           className="border border-stone-300 rounded-full p-1"
           onPress={() => incrementQuantity(item.id, item.size)}
         >
           <Ionicons name="add" size={16} color={colors.text} />
         </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <View className="px-6 py-4 flex-1">
         {/* Header */}
         <View className="flex-row items-center justify-center mb-6 relative">
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute left-0 p-2">
               <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-stone-800">Order</Text>
         </View>

         {/* Delivery Address (Toggle) */}
         <View className="flex-row bg-stone-100 rounded-xl p-1 mb-6">
            <TouchableOpacity className="flex-1 bg-amber-900 rounded-lg py-2 items-center">
               <Text className="text-white font-bold">Deliver</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-2 items-center">
               <Text className="text-stone-500 font-bold">Pick Up</Text>
            </TouchableOpacity>
         </View>

         <View className="mb-4">
            <Text className="text-lg font-bold text-stone-800 mb-2">Delivery Address</Text>
            <Text className="text-stone-800 font-bold">Jl. Kpg Sutoyo</Text>
            <Text className="text-stone-500 text-sm">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
            <View className="flex-row mt-2 gap-2">
               <TouchableOpacity className="border border-stone-300 rounded-full px-3 py-1 flex-row items-center gap-1">
                  <Ionicons name="create-outline" size={14} color="black" />
                  <Text className="text-xs">Edit Address</Text>
               </TouchableOpacity>
               <TouchableOpacity className="border border-stone-300 rounded-full px-3 py-1 flex-row items-center gap-1">
                  <Ionicons name="document-text-outline" size={14} color="black" />
                  <Text className="text-xs">Add Note</Text>
               </TouchableOpacity>
            </View>
         </View>

         <View className="h-[1px] bg-stone-200 my-2" />

         {/* Cart List */}
         <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}-${item.size}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            ListEmptyComponent={
               <View className="items-center justify-center py-10">
                  <Text className="text-stone-400">Your cart is empty</Text>
               </View>
            }
         />

         {/* Payment Summary */}
         <View className="border-t border-stone-100 pt-4 mt-2">
            <View className="flex-row justify-between mb-2">
               <Text className="text-stone-500">Subtotal</Text>
               <Text className="text-stone-800 font-bold">$ {subtotal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
               <Text className="text-stone-500">Delivery Fee</Text>
               <Text className="text-stone-800 font-bold">$ {deliveryFee.toFixed(2)}</Text>
            </View>
            <View className="h-[1px] bg-stone-200 my-2" />
            <View className="flex-row justify-between mb-4">
               <Text className="text-lg font-bold text-stone-800">Total Payment</Text>
               <Text className="text-lg font-bold text-amber-900">$ {total.toFixed(2)}</Text>
            </View>
            
            <TouchableOpacity 
               className="bg-amber-900 rounded-2xl py-4 items-center"
               onPress={() => navigation.navigate('Delivery')}
               disabled={cart.length === 0}
               style={{ opacity: cart.length === 0 ? 0.5 : 1 }}
            >
               <Text className="text-white font-bold text-lg">Order</Text>
            </TouchableOpacity>
         </View>
      </View>
    </SafeAreaView>
  );
}
