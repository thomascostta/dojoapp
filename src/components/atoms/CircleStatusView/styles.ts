import styled from "styled-components/native";

interface CircleStatusViewProps {
  isSuccess: boolean;
}

export const Container = styled.View<CircleStatusViewProps>`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${({ theme, isSuccess }) =>
    isSuccess ? theme.colors.status.success : theme.colors.status.error};
`;
