import { View } from "react-native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";

export function Groups() {
  return (
    <View className="flex-1 bg-gray-600 p-6">
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma!" />

      <GroupCard title="Galera do Ignite" />
      <GroupCard title="Galera do Ignite" />
    </View>
  );
}
