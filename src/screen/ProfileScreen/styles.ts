import { ImageBackground, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled, { css } from "styled-components/native";

interface OptionProps {
  active: boolean;
}

export const BackgroundContainer = styled(ImageBackground)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black.primary};
`;

export const Container = styled.View`
  padding-top: ${Platform.OS === "android" ? 0 : 20}px;
  width: 100%;
  height: 100%;
  padding: 0 12px;
`;

export const Gradiente = styled(LinearGradient)`
  height: 25px;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

export const Options = styled.View`
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.colors.orange.primary};
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 24px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom: 14px;

  ${({ active }) =>
    active &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${({ theme }) => theme.colors.orange.primary};
    `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: 16px;
  font-family: ${({ theme, active }) =>
    active ? theme.fontFamily.geologica_500 : theme.fontFamily.geologica_400};
  color: ${({ theme, active }) =>
    active ? theme.colors.orange.secondary : theme.colors.white.secondary};
`;
