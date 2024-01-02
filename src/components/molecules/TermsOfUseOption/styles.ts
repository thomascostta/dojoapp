import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
  margin-left: 8px;
`;
