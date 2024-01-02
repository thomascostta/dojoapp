import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ISelectedColorProps {
  isSelected: boolean;
}

interface IButtonPrimaryProps extends ISelectedColorProps {
  marginTop: number;
  marginBotton: number;
}

export const Touchable = styled(TouchableOpacity)<IButtonPrimaryProps>`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.orange.secondary : theme.colors.white.secondary};
  border-radius: 12px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text<ISelectedColorProps>`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white.primary : theme.colors.black.primary};
  text-align: center;
`;
