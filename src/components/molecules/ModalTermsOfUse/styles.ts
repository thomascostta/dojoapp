import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  height: 80%;
  width: 100%;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray.fourth};
  justify-content: space-around;
  align-items: center;
`;

export const ContentButton = styled.View`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 24px;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white.primary};
`;

export const ContentScroll = styled.View`
  height: 450px;
  width: 95%;
  padding-bottom: 30px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#404040",
    borderRadius: 12,
  },
  showsVerticalScrollIndicator: false,
})``;

export const ContentCheckbox = styled.View`
  width: 100%;
  height: 90px;
  padding: 0 16px;
`;
