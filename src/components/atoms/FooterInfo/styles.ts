import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._12}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 20.4px;
  text-align: center;
`;
