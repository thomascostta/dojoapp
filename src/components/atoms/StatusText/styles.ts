import styled from "styled-components/native";

interface ITextProps {
  status: "success" | "error";
}

interface IStatusTextStylesProps {
  marginBotton: number;
  marginTop: number;
}

export const Container = styled.View<IStatusTextStylesProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._12}px;
  color: ${({ theme, status }) =>
    status === "success"
      ? theme.colors.green.primary
      : theme.colors.red.primary};
  line-height: 20.4px;
  margin-left: 8px;
`;
