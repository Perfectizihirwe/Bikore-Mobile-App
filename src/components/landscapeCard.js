import { View, Text, TouchableOpacity } from "react-native";
import { getColor } from "../utils/functions";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";

export const LargeCard = ({ title, progress, onPress }) => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity
      style={{
        marginRight: 15,
        width: "100%",
      }}
      onPress={onPress}
    >
      <View
        style={[
          {
            backgroundColor: getColor("secondaryBg", mode),
            padding: 10,
            borderRadius: 15,
            width: "100%",
            marginBottom: 15,
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
          <View>
            <Text
              style={{
                color: getColor("cardText", mode),
              }}
            >
              Checklist preview
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 2,
                  borderColor: getColor("secondaryText", mode),
                  borderWidth: 1,
                  marginRight: 5,
                }}
              />
              <Text>Lorem ipsum dolor sit amet, consectetur...</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 2,
                  borderColor: getColor("secondaryText", mode),
                  borderWidth: 1,
                  marginRight: 5,
                }}
              />
              <Text>Lorem ipsum dolor sit amet, consectetur...</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 2,
                  borderColor: getColor("secondaryText", mode),
                  borderWidth: 1,
                  marginRight: 5,
                }}
              />
              <Text>Lorem ipsum dolor sit amet, consectetur...</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 2,
                  borderColor: getColor("secondaryText", mode),
                  borderWidth: 1,
                  marginRight: 5,
                }}
              />
              <Text>Lorem ipsum dolor sit amet, consectetur...</Text>
            </View>
          </View>
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
