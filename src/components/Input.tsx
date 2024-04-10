import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholder="Nome da turma"
      placeholderTextColor={colors.gray[300]}
      className="flex h-14 bg-gray-700 rounded-md p-4 text-white"
      {...rest}
    ></TextInput>
  );
}
