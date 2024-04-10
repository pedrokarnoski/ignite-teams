import { useState } from "react";
import { View, FlatList } from "react-native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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

      <Button title="Criar nova turma" />
    </View>
  );
}
