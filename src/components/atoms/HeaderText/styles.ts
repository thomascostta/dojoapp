import styled from "styled-components/native";

interface PropsHeaderText {
  marginBotton: number;
  marginTop: number;
}

export const Container = styled.View<PropsHeaderText>`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 24px;
  text-align: center;
`;
