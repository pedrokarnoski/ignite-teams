import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

type FilterProps = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <TouchableOpacity {...rest}>
      <View
        className={`${
          isActive && "border border-solid border-green-700"
        } rounded mr-3 h-9 w-16 items-center justify-center`}
      >
        <Text className="text-white font-bold uppercase">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
