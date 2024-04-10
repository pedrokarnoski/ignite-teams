import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  title: string;
};

const variants = {
  PRIMARY: "bg-green-700",
  SECONDARY: "bg-red-dark",
};

export function Button({ type = "PRIMARY", title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <View
        className={`${variants[type]} flex min-h-14 min-w-14 rounded-md items-center justify-center`}
      >
        <Text className="text-white font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
