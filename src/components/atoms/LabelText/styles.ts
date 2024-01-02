import styled from "styled-components/native";

interface ILabelTextStylesProps {
  marginBotton: number;
  marginTop: number;
}

interface ITextAlignStylesProps {
  textAlign: "left" | "center " | "right";
}

export const Container = styled.View<ILabelTextStylesProps>`
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text<ITextAlignStylesProps>`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
  text-align: ${({ textAlign }) => textAlign};
`;
