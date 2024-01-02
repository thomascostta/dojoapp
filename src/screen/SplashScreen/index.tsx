import { useCallback, useEffect } from "react";
import { useTheme } from "styled-components";
import { useNavigation, ParamListBase } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

import { BackgroundContainer, Container, ImageLogo } from "./styles";
import JapanImage from "../../assets/japan.png";

export function SplashScreen() {
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.navigate("InitialStackPublic");
  }

  useFocusEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1500 }, () => {
      runOnJS(startApp)();
    });

    return () => {
      splashAnimation.value = 0;
    };
  });

  const theme = useTheme();
  return (
    <BackgroundContainer source={theme.images.background}>
      <Container>
        <Animated.View style={[brandStyle, { position: "absolute" }]}>
          <ImageLogo source={JapanImage} sizeBig />
        </Animated.View>

        <Animated.View style={[logoStyle, { position: "absolute" }]}>
          <ImageLogo source={JapanImage} />
        </Animated.View>
      </Container>
    </BackgroundContainer>
  );
}
