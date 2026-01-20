import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
import { coffeeData, Coffee } from "../data/coffee";
import { colors } from "../constants";
// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: Coffee }) => (
    <TouchableOpacity
      className="bg-white rounded-xl p-3 mb-4 w-[48%] shadow-sm"
      onPress={() => navigation.navigate("Details", { coffee: item })}
    >
      <Image
        source={item.image}
        className="w-full h-32 rounded-lg mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold text-stone-800">{item.name}</Text>
      <Text className="text-xs text-stone-500 mb-1">{item.type}</Text>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-base font-bold text-amber-900">
          $ {item.price.toFixed(2)}
        </Text>
        <View className="bg-amber-900 rounded-full p-1">
           <Ionicons name="add" size={16} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <View className="px-6 pt-2 pb-4">
        <View className="flex-row justify-between items-center mb-6">
           <View>
              <Text className="text-stone-400 text-sm">Location</Text>
              <Text className="text-stone-800 font-bold text-base">Bilzen, Tanjungbalai</Text>
           </View>
           <Image 
              source={require("../assets/images/Image Onboarding.png")} 
              className="w-10 h-10 rounded-lg" 
           />
        </View>

        <View className="flex-row items-center bg-stone-800 rounded-2xl p-4 mb-6 relative overflow-hidden">
           <View className="flex-1 z-10">
              <View className="bg-red-500 rounded-lg px-2 py-1 self-start mb-2">
                <Text className="text-white text-xs font-bold">Promo</Text>
              </View>
              <Text className="text-white text-2xl font-bold mb-2">Buy one get{"\n"}one FREE</Text>
           </View>
           <Image 
             source={require("../assets/images/Banner 1.png")} 
             className="absolute right-0 top-0 w-32 h-full"
             resizeMode="cover"
           />
        </View>

        <View className="mb-6">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
              {['Cappuccino', 'Machiato', 'Latte', 'Americano'].map((cat, index) => (
                 <TouchableOpacity 
                   key={index} 
                   className={`px-4 py-2 rounded-lg ${index === 0 ? 'bg-amber-900' : 'bg-white'}`}
                 >
                    <Text className={`font-semibold ${index === 0 ? 'text-white' : 'text-stone-600'}`}>
                       {cat}
                    </Text>
                 </TouchableOpacity>
              ))}
           </ScrollView>
        </View>

        <FlatList
          data={coffeeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}

// Temporary ScrollView import fix
import { ScrollView } from "react-native";
