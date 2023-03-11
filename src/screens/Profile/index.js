import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getColor } from "../../utils/functions";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { toggleTheme } from "../../features/theme/themeSlice";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: getColor("primaryBg", mode),
          padding: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            alignSelf: "center",
            marginTop: 20,
            fontWeight: "bold",
            color: getColor("primaryText", mode),
          }}
        >
          Profile Page
        </Text>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 200,
              marginVertical: 20,
            }}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
          />
          <Text
            style={{
              color: getColor("primaryText", mode),
            }}
          >
            Perfect Gift IZIHIRWE
          </Text>
        </View>
        <Text
          style={{
            color: getColor("primaryText", mode),
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Settings
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="backup"
              size={24}
              color={getColor("primaryText", mode)}
            />
            <Text
              style={{
                color: getColor("primaryText", mode),
                marginLeft: 20,
              }}
            >
              Backup Data
            </Text>
          </View>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color={getColor("primaryText", mode)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="restore"
              size={24}
              color={getColor("primaryText", mode)}
            />
            <Text
              style={{
                color: getColor("primaryText", mode),
                marginLeft: 20,
              }}
            >
              Restore Data
            </Text>
          </View>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color={getColor("primaryText", mode)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome
              name="lock"
              size={24}
              style={{ marginLeft: 5 }}
              color={getColor("primaryText", mode)}
            />
            <Text
              style={{
                color: getColor("primaryText", mode),
                marginLeft: 20,
              }}
            >
              Change Password
            </Text>
          </View>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color={getColor("primaryText", mode)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={handleThemeChange}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color={getColor("primaryText", mode)}
            />
            <Text
              style={{
                color: getColor("primaryText", mode),
                marginLeft: 20,
              }}
            >
              Change Theme
            </Text>
          </View>
          <Button onPress={handleThemeChange}>
            <FontAwesome
              name={mode == "light" ? "moon-o" : "sun-o"}
              size={24}
              color={mode == "light" ? "black" : "white"}
            />
          </Button>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 100,
            height: "100%",
          }}
        >
          <Button title={"Logout"} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
