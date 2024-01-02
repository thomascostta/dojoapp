import styled, { css } from "styled-components/native";

interface ContentProps {
  paymentStatus: "paid" | "latePayment" | "opened";
}

const handleBackgroundStatus = ({ paymentStatus }: ContentProps) => {
  if (paymentStatus === "paid") {
    return css`
      background-color: ${({ theme }) => theme.colors.status.success};
    `;
  } else if (paymentStatus === "latePayment") {
    return css`
      background-color: ${({ theme }) => theme.colors.status.error};
    `;
  } else if (paymentStatus === "opened") {
    return css`
      background-color: ${({ theme }) => theme.colors.status.opened};
    `;
  }
};

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ContentButton = styled.View<ContentProps>`
  flex-direction: row;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 12px;
  padding: 20px;
  ${({ paymentStatus }) => handleBackgroundStatus({ paymentStatus })}
`;

export const ContentDate = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.View``;

export const ContentTitleStatus = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const TitleStatus = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._16}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const ContainerTitle = styled.View``;

export const TitleNumberDate = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_500};
  font-size: ${({ theme }) => theme.fontSizes._20}px;
  color: ${({ theme }) => theme.colors.white.primary};
  line-height: 21px;
`;

export const TitleDayWeek = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.geologica_400};
  font-size: ${({ theme }) => theme.fontSizes._14}px;
  color: ${({ theme }) => theme.colors.white.primary};
`;

export const ContainerIcon = styled.View`
  justify-content: center;
`;
