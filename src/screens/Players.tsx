import { View, FlatList, Text } from "react-native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";

export function Players() {
  const [teamSelected, setTeamSelected] = useState("Time A");
  const [players, setPlayers] = useState([]);

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

      <View className="w-full flex-row items-center my-8 mb-3">
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === teamSelected}
              onPress={() => setTeamSelected(item)}
            />
          )}
          horizontal
        />
        <Text className="text-gray-200 font-bold">{players.length}</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingBottom: 64,
          },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </View>
  );
}
