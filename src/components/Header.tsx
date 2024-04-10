import { View, Image, TouchableOpacity } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <View className="w-full mb-8 flex-row items-center justify-center">
      {showBackButton && (
        <View className="flex-1">
          <TouchableOpacity>
            <FontAwesome6 name="chevron-left" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}

      <Image className="w-11 h-14" source={require("@/assets/logo.png")} />
    </View>
  );
}
