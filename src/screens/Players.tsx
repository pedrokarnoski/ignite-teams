import { useState } from "react";
import { View, FlatList, Text, Alert } from "react-native";

import { useRoute } from "@react-navigation/native";

import { AppError } from "@/utils/AppError";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";

import { playersAddByGroup } from "@/storage/player/playersAddByGroup";
import { playersGetByGroup } from "@/storage/player/playersGetByGroup";

type RouteParams = {
  Group: string;
};

export function Players() {
  const route = useRoute();
  const { Group } = route.params as RouteParams;

  const [teamSelected, setTeamSelected] = useState("Time A");
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo jogador", "Informe o nome do jogador.");
    }

    const newPlayer = {
      name: newPlayerName,
      team: teamSelected,
    };

    try {
      await playersAddByGroup(newPlayer, Group);

      const players = await playersGetByGroup(Group);
      console.log(players);
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Novo jogador", err.message);
      } else {
        Alert.alert("Novo jogador", "Não foi possível adicionar.");
      }
    }
  }

  return (
    <View className="flex-1 bg-gray-600 p-6">
      <Header showBackButton />

      <View className="gap-6">
        <Highlight
          title={Group}
          subtitle="adicione a galera e separe os times"
        />

        <View className="w-full bg-gray-700 flex-row justify-between rounded-md">
          <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
            onChangeText={setNewPlayerName}
          />
          <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
