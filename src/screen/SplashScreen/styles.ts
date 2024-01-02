import styled from "styled-components/native";
import { ImageBackground, Platform } from "react-native";

interface IImageLogoProps {
  sizeBig?: boolean;
}

export const BackgroundContainer = styled(ImageBackground)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: ${Platform.OS === "android" ? 0 : 20}px;
`;

export const ImageLogo = styled.Image<IImageLogoProps>`
  width: ${({ sizeBig }) => (sizeBig ? 250 : 150)}px;
  height: ${({ sizeBig }) => (sizeBig ? 250 : 150)}px;
`;
