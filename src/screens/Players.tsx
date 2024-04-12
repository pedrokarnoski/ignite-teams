import { View } from "react-native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";

export function Players() {
  return (
    <View className="flex-1 bg-gray-600 p-6">
      <Header showBackButton />

      <View className="gap-6">
        <Highlight
          title="Nome da turma"
          subtitle="adicione a galera e separe os times"
        />

        <View className="w-full bg-gray-700 flex-row justify-between rounded-md">
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" />
        </View>
      </View>

      <Filter title="Time A" />
    </View>
  );
}
