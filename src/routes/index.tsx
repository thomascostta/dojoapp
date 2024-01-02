import { NavigationContainer } from "@react-navigation/native";

import { useUser } from "../context/user";

import { PublicStackRoutes } from "./public.stack.routes";
import { PrivateTabsRoutes } from "./private.tab.routes";

export function Routes() {
  const { tokenFake } = useUser();

  return (
    <NavigationContainer>
      {tokenFake ? <PrivateTabsRoutes /> : <PublicStackRoutes />}
    </NavigationContainer>
  );
}
