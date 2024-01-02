import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IButtonPrimaryProps {
  marginTop: number;
  marginBotton: number;
}

export const Touchable = styled(TouchableOpacity)<IButtonPrimaryProps>`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange.secondary};
  border-radius: 12px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
  text-align: center;
`;
