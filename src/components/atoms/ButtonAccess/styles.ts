import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ITouchableProps {
  disabled: boolean;
}
export const Touchable = styled(TouchableOpacity)<ITouchableProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.orange.secondary};
  opacity: ${({disabled}) => disabled ? 0.5 : 1};
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  flex-direction: row;
  padding: 0 16px 0 12px;
`;

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
  text-align: center;
`;
