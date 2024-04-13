import { useState } from "react";
import { View } from "react-native";

import { groupCreate } from "@/storage/group/groupCreate";

import { useNavigation } from "@react-navigation/native";

import { FontAwesome6 } from "@expo/vector-icons";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { colors } from "@/styles/colors";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
    } catch (err) {
      console.error(err);
    }

    navigation.navigate("Players", {
      Group: group,
    });
  }

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

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" onPress={handleNew} />
      </View>
    </View>
  );
}
