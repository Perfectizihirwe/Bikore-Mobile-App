import { View, Text, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { getColor } from "../utils/functions";

export const InputArea = ({
  title,
  value,
  onChangeText,
  placeholder,
  type,
  children,
  ...props
}) => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        flexDirection: "column",
        paddingHorizontal: 15,
        width: "100%",
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "600",
          marginBottom: 5,
          color: getColor("primaryText", mode),
        }}
      >
        {title}
      </Text>
      <View
        style={{
          borderRadius: 200,
          borderWidth: 0.5,
          borderColor: getColor("secondaryText", mode),
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            color: getColor("primaryText", mode),
            padding: 5,
          }}
          placeholderTextColor={getColor("secondaryText", mode)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
        <View>{children}</View>
      </View>
    </View>
  );
};
