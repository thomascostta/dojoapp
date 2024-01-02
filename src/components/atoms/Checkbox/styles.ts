import Checkbox from "expo-checkbox";
import styled from "styled-components/native";

export const Container = styled(Checkbox)`
  border-color: ${({ theme }) => theme.colors.white.primary};
  width: 20px;
  height: 20px;
`;
