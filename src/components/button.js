import { TouchableOpacity, View, Text } from "react-native";
import { getColor } from "../utils/functions";
import { useSelector } from "react-redux";

export const Button = ({ title, onPress, style, children }) => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          style,
          {
            backgroundColor: !children ? getColor("buttonColor", mode) : null,
            padding: !children ? 10 : 0,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 200,
          },
        ]}
      >
        {!children && (
          <Text style={{ color: getColor("buttonText", mode), fontSize: 18 }}>
            {title}
          </Text>
        )}
        {children}
      </View>
    </TouchableOpacity>
  );
};
