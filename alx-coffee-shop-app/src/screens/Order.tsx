import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
import { useCartStore } from "../store/cartStore";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from "../constants";

export default function Order() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { items, incrementQuantity, decrementQuantity, getTotalPrice } = useCartStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-6 py-4 mb-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
           <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-stone-800 ml-4">Order</Text>
      </View>

      <View className="px-6 mb-4">
        <View className="flex-row bg-stone-100 p-1 rounded-xl mb-6">
          <TouchableOpacity className="flex-1 bg-amber-900 rounded-lg py-2 items-center">
            <Text className="text-white font-bold">Deliver</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 py-2 items-center">
            <Text className="text-stone-500 font-bold">Pick Up</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-lg font-bold text-stone-800 mb-4">Delivery Address</Text>
        <View className="mb-6">
           <Text className="font-bold text-stone-800 mb-1">Jl. Kpg Sutoyo</Text>
           <Text className="text-stone-500 text-sm">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
           <View className="flex-row gap-2 mt-2">
              <TouchableOpacity className="border border-stone-200 rounded-full px-3 py-1 flex-row items-center">
                 <Ionicons name="create-outline" size={14} color="#78716c" />
                 <Text className="text-stone-500 text-xs ml-1">Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity className="border border-stone-200 rounded-full px-3 py-1 flex-row items-center">
                 <Ionicons name="document-text-outline" size={14} color="#78716c" />
                 <Text className="text-stone-500 text-xs ml-1">Add Note</Text>
              </TouchableOpacity>
           </View>
        </View>
      </View>
      
      <View className="h-[1px] bg-stone-100 mb-4 mx-6" />

      <ScrollView className="flex-1 px-6">
         {items.map((item, index) => (
           <View key={`${item.id}-${item.size}`} className="flex-row items-center mb-6">
              <Image 
                source={item.image} 
                className="w-16 h-16 rounded-lg mr-4"
              />
              <View className="flex-1">
                 <Text className="font-bold text-stone-800 text-base">{item.name}</Text>
                 <Text className="text-stone-500 text-xs">{item.type}</Text>
              </View>
              <View className="flex-row items-center gap-3">
                 <TouchableOpacity 
                   onPress={() => decrementQuantity(item.id)}
                   className="w-6 h-6 rounded-full border border-stone-300 items-center justify-center"
                 >
                    <Ionicons name="remove" size={16} color="black" />
                 </TouchableOpacity>
                 <Text className="font-bold text-stone-800">{item.quantity}</Text>
                 <TouchableOpacity 
                   onPress={() => incrementQuantity(item.id)}
                   className="w-6 h-6 rounded-full border border-stone-300 items-center justify-center"
                 >
                    <Ionicons name="add" size={16} color="black" />
                 </TouchableOpacity>
              </View>
           </View>
         ))}
         
         <View className="h-[1px] bg-stone-100 my-4" />
         
         <View className="bg-white border border-stone-200 rounded-xl p-4 flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
               <Ionicons name="pricetag-outline" size={20} color="#ea580c" />
               <Text className="font-bold text-stone-800 ml-2">1 Discount is applied</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
         </View>

         <Text className="text-lg font-bold text-stone-800 mb-4">Payment Summary</Text>
         <View className="gap-2 mb-8">
            <View className="flex-row justify-between">
               <Text className="text-stone-800">Price</Text>
               <Text className="font-bold text-stone-800">$ {getTotalPrice().toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between">
               <Text className="text-stone-800">Delivery Fee</Text>
               <Text className="font-bold text-stone-800 line-through">$ 2.00</Text>
               <Text className="font-bold text-stone-800">$ 1.00</Text>
            </View>
         </View>
      </ScrollView>

      <View className="px-6 py-4 border-t border-stone-100 bg-white">
         <View className="flex-row justify-between items-center mb-4">
             <View className="flex-row items-center">
                <Ionicons name="wallet-outline" size={24} color="#a16207" />
                <View className="ml-2">
                   <Text className="text-stone-800 font-bold">Cash/Wallet</Text>
                   <Text className="text-amber-900 font-bold">$ 5.53</Text>
                </View>
             </View>
             <Ionicons name="chevron-down" size={20} color="black" />
         </View>
         <TouchableOpacity 
           className="bg-amber-900 w-full py-4 rounded-2xl items-center"
           onPress={() => navigation.navigate("Delivery")}
         >
            <Text className="text-white font-bold text-lg">Order</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
