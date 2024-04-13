import { useState, useCallback } from "react";
import { View, FlatList } from "react-native";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { groupsGetAll } from "@/storage/group/groupsGetAll";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();

      setGroups(data);
    } catch (err) {
      console.error(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <View className="flex-1 bg-gray-600 p-6">
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma!" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </View>
  );
}
