import { useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./src/store/configureStore";

import { Routes } from "./src/routes";
import { AppProvider } from "./src/context";
import { defaultTheme } from "./src/theme/default";
import { fonts } from "./src/assets/fonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [hasLoadedFonts] = useFonts(fonts);

  const hideSplashScreen = useCallback(async () => {
    if (hasLoadedFonts) {
      await SplashScreen.hideAsync();
    }
  }, [hasLoadedFonts]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </Provider>
  );
}
