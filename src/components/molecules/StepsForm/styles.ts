import styled from "styled-components/native";

interface IStepForm {
  marginTop?: number;
  marginBotton?: number;
}

export const Container = styled.View<IStepForm>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBotton }) => marginBotton}px;
`;

export const Title = styled.Text``;
