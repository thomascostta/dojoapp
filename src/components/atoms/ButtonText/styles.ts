import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IButtonNewUserProps {
  marginTop: number;
  marginBotton: number;
}

interface IColorTextProps {
  hasIconToColorLabel: boolean;
}

export const Container = styled.View<IButtonNewUserProps>`
  width: 100%;
  height: 25px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Touchable = styled(TouchableOpacity)``;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<IColorTextProps>`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  color: ${({ theme, hasIconToColorLabel }) =>
    hasIconToColorLabel
      ? theme.colors.orange.primary
      : theme.colors.orange.third};
  line-height: 24px;
  margin-right: 4px;
`;
