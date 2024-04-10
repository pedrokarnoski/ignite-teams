import { View, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <View className="p-8 w-full flex-row items-center justify-center">
      {showBackButton && (
        <View className="flex-1">
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-left"
              size={32}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      )}

      <Image className="w-11 h-14" source={require("@/assets/logo.png")} />
    </View>
  );
}
