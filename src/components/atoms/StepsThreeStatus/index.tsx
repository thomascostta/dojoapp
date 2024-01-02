import { Container } from "./styles";

interface IStepsProps {
  step: "first" | "second" | "third";
  currentStep: "first" | "second" | "third";
}

export function StepsThreeStatus({ step, currentStep }: IStepsProps) {
  return <Container step={step} currentStep={currentStep} />
}
