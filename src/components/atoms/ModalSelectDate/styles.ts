import ModalBox from "react-native-modalbox";
import styled from "styled-components/native";

export const Container = styled(ModalBox)`
  width: 30%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.white.third};
  background-color: ${({ theme }) => theme.colors.white.primary};
  padding-bottom: 1px;
`;

export const TouchableSelectDate = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-bottom-color: ${({ theme }) => theme.colors.blue.primary};
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.black.primary};
  line-height: 21px;
  text-align: center;
`;
