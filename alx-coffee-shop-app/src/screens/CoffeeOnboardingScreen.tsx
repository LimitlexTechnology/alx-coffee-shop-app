import React from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  StatusBar,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

// Define navigation prop type
type CoffeeOnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

const { width, height } = Dimensions.get('window');

const CoffeeOnboardingScreen = () => {
  const navigation = useNavigation<CoffeeOnboardingScreenNavigationProp>();

  return (
    <View className="flex-1 bg-[#0b0b0b]">
      <StatusBar barStyle="light-content" />
      
      <ImageBackground
        source={require('../assets/coffee-bg.png')}
        className="flex-1 justify-end"
        resizeMode="cover"
        style={{ width, height }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.95)']}
          locations={[0, 0.3, 0.6, 1]}
          style={{ paddingBottom: 40, paddingTop: 100, paddingHorizontal: 24, width: '100%' }}
        >
          <SafeAreaView edges={['bottom']}>
            {/* Content Container */}
            <View className="w-full items-center">
              
              {/* Headline */}
              <Text className="text-white text-4xl font-bold text-center mb-3 leading-tight">
                Fall in Love with{'\n'}
                Coffee in Blissful{'\n'}
                Delight!
              </Text>

              {/* Subtext */}
              <Text className="text-gray-300 text-base text-center mb-6 opacity-80 leading-6 px-2">
                Welcome to our cozy coffee corner, where every cup is a delightful for you.
              </Text>

              {/* Button */}
              <TouchableOpacity
                className="w-full bg-[#C67C4E] rounded-2xl py-4 items-center justify-center h-[56px]"
                onPress={() => navigation.replace('Main')}
                activeOpacity={0.8}
              >
                <Text className="text-[#2A2A2A] text-lg font-bold">
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default CoffeeOnboardingScreen;
