import { TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      className="bg-blue-600 rounded-lg px-4 py-3"
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text className="text-white font-semibold text-center">{title}</Text>
    </TouchableOpacity>
  );
}
