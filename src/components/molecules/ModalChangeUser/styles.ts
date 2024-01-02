import ModalBox from "react-native-modalbox";
import styled from "styled-components/native";

export const Container = styled(ModalBox)`
  width: 90%;
  height: 300px;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.white.third};
  background-color: ${({ theme }) => theme.colors.white.primary};
`;

export const ContentHeader = styled.View`
  width: 100%;
  height: 60px;
`;

export const ContentTitle = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.orange.secondary};
  text-align: center;
`;

export const ContentButton = styled.View`
  justify-content: space-between;
  width: 100%;
  height: 180px;
`;

export const ButtonPrimary = styled.View``;

export const ContentButtonCLose = styled.View`
  position: absolute;
  right: 5px;
`;

export const ContentChangeSelectStudents = styled.View``;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  color: ${({ theme }) => theme.colors.black.primary};
  padding-left: 16px;
`;

export const TitleChooseQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  color: ${({ theme }) => theme.colors.black.primary};
`;

export const ContentInput = styled.View`
  width: 22%;
`;

export const ContainerInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ContentButtonBack = styled.View`
  position: absolute;
  left: 5px;
  z-index: 999;
`;
