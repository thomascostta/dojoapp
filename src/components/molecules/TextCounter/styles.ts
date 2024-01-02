import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ITextProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const TitleCounter = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const TitleResend = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.orange.primary : theme.colors.white.third};
  line-height: 21px;
`;

export const ResendCode = styled(TouchableOpacity)`
  margin-top: 19px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
