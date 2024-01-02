import { Container } from "./styles";
import { StepsThreeStatus } from "../../atoms/StepsThreeStatus";

interface IStepsFormProps {
  marginTop?: number;
  marginBotton?: number;
  steps?: "first" | "second" | "third";
}

export function StepsForm({
  marginTop = 0,
  marginBotton = 0,
  steps = "first",
}: IStepsFormProps) {
  const stepsArray = ["first", "second", "third"];

  return (
    <Container marginTop={marginTop} marginBotton={marginBotton}>
      {stepsArray.map((stepKey) => (
        <StepsThreeStatus
          key={stepKey}
          step={steps}
          currentStep={stepKey as "first" | "second" | "third"}
        />
      ))}
    </Container>
  );
}
