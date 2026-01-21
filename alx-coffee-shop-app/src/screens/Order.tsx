import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
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
   const { cart, incrementQuantity, decrementQuantity } = useStore();
   const [deliveryMethod, setDeliveryMethod] = useState<'deliver' | 'pickup'>('deliver');

   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const discount = 1.0;
   const deliveryFee = 1.0;
   const total = subtotal + deliveryFee - discount;

   return (
      <View className="flex-1 bg-coffee-light">
         <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />

         {/* Header */}
         <SafeAreaView edges={['top']} className="bg-coffee-light">
            <View className="flex-row items-center justify-center px-6 py-4 relative">
               <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="absolute left-6"
               >
                  <Ionicons name="arrow-back" size={24} color="#303336" />
               </TouchableOpacity>
               <Text className="text-lg font-semibold text-coffee-text">Order</Text>
            </View>
         </SafeAreaView>

         <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
         >
            <View className="px-6">
               {/* Delivery/Pickup Toggle */}
               <View className="flex-row bg-coffee-gray/30 rounded-xl p-1 mb-4">
                  <TouchableOpacity
                     className={`flex-1 py-3 rounded-xl ${deliveryMethod === 'deliver' ? 'bg-coffee-primary' : ''}`}
                     onPress={() => setDeliveryMethod('deliver')}
                  >
                     <Text className={`text-center font-semibold ${deliveryMethod === 'deliver' ? 'text-white' : 'text-coffee-text'}`}>
                        Deliver
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     className={`flex-1 py-3 rounded-xl ${deliveryMethod === 'pickup' ? 'bg-coffee-primary' : ''}`}
                     onPress={() => setDeliveryMethod('pickup')}
                  >
                     <Text className={`text-center font-semibold ${deliveryMethod === 'pickup' ? 'text-white' : 'text-coffee-text'}`}>
                        Pick Up
                     </Text>
                  </TouchableOpacity>
               </View>

               {/* Delivery Address Card */}
               <View className="bg-white border-2 border-blue-500 rounded-2xl p-4 mb-4 shadow-sm">
                  <Text className="text-base font-bold text-coffee-text mb-3">Delivery Address</Text>
                  <Text className="text-base font-bold text-coffee-text mb-1">Jl. Kpg Sutoyo</Text>
                  <Text className="text-sm text-coffee-muted mb-3">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>

                  <View className="flex-row gap-3">
                     <TouchableOpacity className="flex-row items-center gap-1.5 border border-coffee-text rounded-2xl px-3 py-2">
                        <Ionicons name="create-outline" size={16} color="#303336" />
                        <Text className="text-xs font-medium text-coffee-text">Edit Address</Text>
                     </TouchableOpacity>
                     <TouchableOpacity className="flex-row items-center gap-1.5 border border-coffee-text rounded-2xl px-3 py-2">
                        <Ionicons name="document-text-outline" size={16} color="#303336" />
                        <Text className="text-xs font-medium text-coffee-text">Add Note</Text>
                     </TouchableOpacity>
                  </View>
               </View>

               {/* Cart Items */}
               {cart.length > 0 ? (
                  cart.map((item) => (
                     <View
                        key={`${item.id}-${item.size}`}
                        className="flex-row items-center bg-white rounded-xl p-3 mb-3 shadow-sm"
                     >
                        <View className="w-14 h-14 rounded-2xl overflow-hidden mr-4">
                           <Image
                              source={item.image}
                              className="w-full h-full"
                              resizeMode="cover"
                           />
                        </View>

                        <View className="flex-1">
                           <Text className="text-base font-bold text-coffee-text">{item.name}</Text>
                           <Text className="text-xs text-coffee-muted">{item.type}</Text>
                        </View>

                        <View className="flex-row items-center gap-3">
                           <TouchableOpacity
                              className="w-8 h-8 rounded-full border border-coffee-text items-center justify-center"
                              onPress={() => decrementQuantity(item.id, item.size)}
                           >
                              <Ionicons name="remove" size={16} color="#303336" />
                           </TouchableOpacity>

                           <Text className="font-semibold text-coffee-text w-3 text-center">{item.quantity}</Text>

                           <TouchableOpacity
                              className="w-8 h-8 rounded-full border border-coffee-text items-center justify-center"
                              onPress={() => incrementQuantity(item.id, item.size)}
                           >
                              <Ionicons name="add" size={16} color="#303336" />
                           </TouchableOpacity>
                        </View>
                     </View>
                  ))
               ) : (
                  <View className="bg-white rounded-xl p-8 items-center justify-center mb-3 shadow-sm">
                     <Text className="text-coffee-muted">Your cart is empty</Text>
                  </View>
               )}

               {/* Discount Row */}
               <TouchableOpacity className="flex-row items-center justify-between bg-white rounded-xl px-4 py-4 mb-3 shadow-sm">
                  <View className="flex-row items-center gap-2">
                     <Ionicons name="pricetag-outline" size={20} color="#C67C4E" />
                     <Text className="text-sm font-medium text-coffee-text">1 Discount is Applies</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#303336" />
               </TouchableOpacity>

               {/* Payment Summary */}
               <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <Text className="text-base font-bold text-coffee-text mb-4">Payment Summary</Text>

                  <View className="flex-row justify-between mb-3">
                     <Text className="text-sm text-coffee-text">Price</Text>
                     <Text className="text-sm font-semibold text-coffee-text">$ {subtotal.toFixed(2)}</Text>
                  </View>

                  <View className="flex-row justify-between mb-3">
                     <Text className="text-sm text-coffee-text">Delivery Fee</Text>
                     <View className="flex-row items-center gap-2">
                        <Text className="text-sm text-coffee-muted line-through">$ 2.0</Text>
                        <Text className="text-sm font-semibold text-coffee-text">$ {deliveryFee.toFixed(1)}</Text>
                     </View>
                  </View>
               </View>

               {/* Payment Method */}
               <View className="bg-white rounded-xl mb-4 shadow-sm">
                  <TouchableOpacity className="flex-row items-center justify-between px-4 py-4">
                     <View className="flex-row items-center gap-3">
                        <View className="w-10 h-10 bg-coffee-secondary/30 rounded-lg items-center justify-center">
                           <Ionicons name="wallet-outline" size={22} color="#C67C4E" />
                        </View>
                        <View>
                           <Text className="text-sm font-semibold text-coffee-text">Cash/Wallet</Text>
                           <Text className="text-xs font-semibold text-coffee-primary">$ {total.toFixed(2)}</Text>
                        </View>
                     </View>
                     <Ionicons name="chevron-down" size={20} color="#303336" />
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>

         {/* Bottom Order Button */}
         <View className="bg-white border-t border-coffee-gray/20">
            <SafeAreaView edges={['bottom']}>
               <View className="px-6 py-4">
                  <TouchableOpacity
                     className="bg-coffee-primary rounded-2xl py-5 items-center shadow-lg"
                     onPress={() => navigation.navigate('Delivery')}
                     disabled={cart.length === 0}
                     style={{ opacity: cart.length === 0 ? 0.5 : 1 }}
                  >
                     <Text className="text-white font-bold text-base">Order</Text>
                  </TouchableOpacity>
               </View>
            </SafeAreaView>
         </View>
      </View>
   );
}
