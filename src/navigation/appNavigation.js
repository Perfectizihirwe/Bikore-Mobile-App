import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigation } from "./homeNavigation";

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeNavigation" component={HomeNavigation} />
    </Navigator>
  );
};
