import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const TitlePrice = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const ContainerInput = styled.View`
  width: 40%;
`;

export const ContentPayment = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentImage = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: -100px;
  z-index: -1;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
`;

export const ContentDueDate = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

export const TextExpiration = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const TextPickerSelect = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._18}px;
  color: ${({ theme }) => theme.colors.black.primary};
  line-height: 21px;
  text-align: center;
`;

export const TouchablePickerSelect = styled.TouchableOpacity`
  width: 40%;
  height: 40px;
  border-radius: 8px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white.secondary};
`;

export const ContentTouchableSelectStudents = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
