import { ImageBackground, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const BackgroundContainer = styled(ImageBackground)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Container = styled.View`
  padding-top: ${Platform.OS === "android" ? 0 : 20}px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Gradiente = styled(LinearGradient)`
  height: 25px;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;
