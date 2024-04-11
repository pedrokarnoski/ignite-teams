import { TouchableOpacity, View, TouchableOpacityProps } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof FontAwesome6.glyphMap;
};

const variants = {
  PRIMARY: colors.green[700],
  SECONDARY: colors.red[500],
};

export function ButtonIcon({
  type = "PRIMARY",
  icon,
  ...rest
}: ButtonIconProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View className="flex h-14 w-14 rounded-md items-center justify-center ml-3">
        <FontAwesome6 name={icon} size={24} color={`${variants[type]}`} />
      </View>
    </TouchableOpacity>
  );
}
