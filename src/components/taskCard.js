import { View, Text, Image, TouchableOpacity } from "react-native";
import { getColor } from "../utils/functions";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";

export const TaskCard = ({ title, progress, onPress }) => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity
      style={{
        marginRight: 15,
      }}
      onPress={onPress}
    >
      <View
        style={[
          {
            backgroundColor: getColor("activeColor", mode),
            padding: 10,
            borderRadius: 15,
            width: "100%",
          },
        ]}
      >
        <Text
          style={{
            color: getColor("cardText", mode),
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: getColor("cardText", mode),
            }}
          >
            Deadline: 12/12/2020
          </Text>
        </View>
        <Text
          style={{
            color: getColor("secondaryText", mode),
            fontSize: 14,
            marginTop: 5,
          }}
        >
          Progress
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Progress.Bar
            progress={0.3}
            width={240}
            height={4}
            borderWidth={0}
            unfilledColor={getColor("secondaryText", mode)}
            color={getColor("progressColor", mode)}
          />
          <Text
            style={{
              color: getColor("secondaryText", mode),
            }}
          >
            {progress}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
