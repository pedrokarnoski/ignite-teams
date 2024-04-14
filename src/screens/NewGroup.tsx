import { useState } from "react";
import { Alert, View } from "react-native";

import { groupCreate } from "@/storage/group/groupCreate";

import { useNavigation } from "@react-navigation/native";

import { FontAwesome6 } from "@expo/vector-icons";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { colors } from "@/styles/colors";
import { AppError } from "@/utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);

      navigation.navigate("Players", {
        Group: group,
      });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Novo grupo", err.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        console.error(err);
      }
    }
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
