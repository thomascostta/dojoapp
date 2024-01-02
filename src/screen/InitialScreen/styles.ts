import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Platform } from "react-native";

export const BackgroundContainer = styled(ImageBackground)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${Platform.OS === "android" ? 30 : 50}px 32px 0 32px;
`;
