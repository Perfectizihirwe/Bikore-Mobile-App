import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./appNavigation";

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
