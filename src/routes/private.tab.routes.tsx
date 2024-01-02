import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { HomeScreen } from "../screen/HomeScreen";
import { ProfileScreen } from "../screen/ProfileScreen";
import { AnimatedTabBar } from "../utils/animatedTabStyles";

type PrivateTabsParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<PrivateTabsParamList>();

export function PrivateTabsRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.text,
        },
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Mensalidade",
          tabBarIcon: () => (
            <MaterialIcons
              name="home"
              size={30}
              color={theme.colors.red.third}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: () => (
            <FontAwesome5
              name="user-ninja"
              size={30}
              color={theme.colors.red.third}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
