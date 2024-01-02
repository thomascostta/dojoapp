import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  background-color: transparent;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.white.primary};
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._22}px;
  color: ${({ theme }) => theme.colors.white.primary};
  margin-top: 40px;
`;
