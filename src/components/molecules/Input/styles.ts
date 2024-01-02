import styled from "styled-components/native";
import MaskInput from "react-native-mask-input";

interface IIsErrorProps {
  isError?: boolean;
}

interface EditableProps {
  editable: boolean;
}

type ErrorOrEditableProps = IIsErrorProps & EditableProps;

interface IMarginBottomProps {
  marginBottom: number;
}

export const Container = styled.View<IMarginBottomProps>`
  width: 100%;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const Content = styled.View<ErrorOrEditableProps>`
  width: 100%;
  height: 48px;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${({ theme, isError }) =>
    isError ? theme.colors.red.primary : theme.colors.white.secondary};
  padding: 6px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${({ theme, editable }) =>
    editable ? "trasnparent" : theme.colors.orange.secondary};
`;

export const InputTextMask = styled(MaskInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.white.third,
}))`
  color: ${({ theme }) => theme.colors.white.primary};
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  padding: 0 8px 0 8px;
  width: 90%;
`;
