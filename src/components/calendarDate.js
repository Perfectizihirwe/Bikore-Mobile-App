import { TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { getColor } from "../utils/functions";

export const Date = ({ day, onPress, style, date, active }) => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 8,
          backgroundColor: active ? "#ffccd1" : null,
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Text
          style={{
            color: active
              ? getColor("cardText", mode)
              : getColor("primaryText", mode),
          }}
        >
          {day}
        </Text>
        <Text
          style={{
            color: active
              ? getColor("cardText", mode)
              : getColor("primaryText", mode),
            fontSize: 20,
          }}
        >
          {date}
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 200,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};
