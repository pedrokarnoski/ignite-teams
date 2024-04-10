import { View, Text } from "react-native";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <View className="w-full mb-4">
      <Text className="text-center text-xl font-semibold text-white">
        {title}
      </Text>
      <Text className="text-center text-lg text-gray-300">{subtitle}</Text>
    </View>
  );
}
