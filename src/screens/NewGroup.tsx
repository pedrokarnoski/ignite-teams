import { View } from "react-native";

import { Header } from "@/components/Header";

import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function NewGroup() {
  return (
    <View className="flex-1 bg-gray-600 p-6">
      <Header showBackButton />

      <View className="flex-1 justify-center gap-6">
        <FontAwesome6
          name="people-group"
          size={56}
          color={colors.green[700]}
          className="self-center"
        />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input />

        <Button title="Criar" />
      </View>
    </View>
  );
}
