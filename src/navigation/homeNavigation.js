import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, AddTask, ProfilePage } from "../screens";
import { useSelector } from "react-redux";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
import { getColor } from "../utils/functions";

const { Navigator, Screen } = Tab;

export const HomeNavigation = () => {
  const mode = useSelector((state) => state.theme.theme);

  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: getColor("primaryBg", mode),
            borderTopColor: getColor("primaryBg", mode),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="home"
                size={30}
                color={
                  focused
                    ? getColor("navButtonActiveColor", mode)
                    : getColor("navButtonColor", mode)
                }
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Screen
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: getColor("primaryBg", mode),
            borderTopColor: getColor("primaryBg", mode),
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="add-circle"
                size={60}
                style={{ marginTop: -20 }}
                color={
                  focused
                    ? getColor("navButtonActiveColor", mode)
                    : getColor("navButtonColor", mode)
                }
              />
            );
          },
        }}
        name="AddTask"
        component={AddTask}
      />
      <Screen
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarStyle: {
            backgroundColor: getColor("primaryBg", mode),
            borderTopColor: getColor("primaryBg", mode),
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="user"
                size={30}
                color={
                  focused
                    ? getColor("navButtonActiveColor", mode)
                    : getColor("navButtonColor", mode)
                }
              />
            );
          },
        }}
        name="ProfilePage"
        component={ProfilePage}
      />
    </Navigator>
  );
};
