import { View, Text } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { ButtonIcon } from "./ButtonIcon";

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <View className="w-full h-14 bg-gray-500 flex-row items-center mb-4 rounded">
      <FontAwesome6
        name="person"
        size={24}
        color={colors.gray[200]}
        className="mx-4"
      />
      <Text className="flex-1 text-gray-200 font-medium">{name}</Text>

      <ButtonIcon icon="xmark" type="SECONDARY" onPress={onRemove} />
    </View>
  );
}
