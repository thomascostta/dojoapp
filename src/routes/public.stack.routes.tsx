import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "../screen/SplashScreen";
import { InitialScreen } from "../screen/InitialScreen";
import { PrivateTabsRoutes } from "./private.tab.routes"; 

type PublicStackParamList = {
  SplashStackPublic: undefined;
  InitialStackPublic: undefined;
  HomeStackPublic: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<PublicStackParamList>();

export function PublicStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashStackPublic"
    >
      <Screen name="SplashStackPublic" component={SplashScreen} />
      <Screen name="InitialStackPublic" component={InitialScreen} />
      <Screen name="HomeStackPublic" component={PrivateTabsRoutes} />
    </Navigator>
  );
}
