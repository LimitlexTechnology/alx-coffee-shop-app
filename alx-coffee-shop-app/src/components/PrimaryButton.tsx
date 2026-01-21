import { TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  style?: string;
};

export default function PrimaryButton({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity
      className={`bg-amber-900 rounded-full px-6 py-3 ${style}`}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text className="text-white font-semibold text-center text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
