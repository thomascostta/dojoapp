import styled, { css } from "styled-components/native";

interface IStepsStyleProps {
  step: "first" | "second" | "third";
  currentStep: "first" | "second" | "third";
}

const handleBackgroundColorStatus = (
  step: "first" | "second" | "third",
  currentStep: "first" | "second" | "third"
) => {
  if (currentStep === step) {
    return css`
      width: 103.5px;
      height: 4px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.orange.secondary};
    `;
  } else if (
    (step === "first" && currentStep === "second") ||
    (step === "second" && currentStep === "third")
  ) {
    return css`
      width: 103.5px;
      height: 4px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.white.primary};
    `;
  } else if (step === "first" && "second") {
    return css`
      width: 103.5px;
      height: 4px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.white.primary};
    `;
  } else {
    return css`
      width: 103.5px;
      height: 4px;
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.white.third};
    `;
  }
};

export const Container = styled.View<IStepsStyleProps>`
  ${({ step, currentStep }) => handleBackgroundColorStatus(step, currentStep)}
`;
