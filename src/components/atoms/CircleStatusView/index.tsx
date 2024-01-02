import { Container } from "./styles";

interface ICircleStatusViewProps {
  isSuccess?: boolean;
}

export function CircleStatusView({ isSuccess = true }: ICircleStatusViewProps) {
  return <Container isSuccess={isSuccess} />;
}
