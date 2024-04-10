import { View } from "react-native";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";

export function Groups() {
  return (
    <View className="flex-1 bg-gray-800">
      <Header />

      <Highlight 
        title="Turmas"
        subtitle="jogue com a sua turma!"
      />
    </View>
  );
}
