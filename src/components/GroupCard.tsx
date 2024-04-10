import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <View className="w-full bg-gray-500 rounded-md flex-row items-center p-6 mt-4">
        <FontAwesome6
          name="people-group"
          size={28}
          color={colors.green[700]}
          className="mr-5"
        />

        <Text className="text-lg text-gray-200 font-normal">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
