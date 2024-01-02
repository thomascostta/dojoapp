import { Container, Title } from "./styles";

import ErrorSVG from "../../../assets/Error.svg";
import SuccessSVG from "../../../assets/Success.svg";

interface IErrorTextProps {
  text: string;
  status: "success" | "error";
  marginTop?: number;
  marginBotton?: number;
}

export function StatusText({
  text,
  status = "success",
  marginTop = 0,
  marginBotton = 0,
}: IErrorTextProps) {
  return (
    <Container marginTop={marginTop} marginBotton={marginBotton}>
      {status === "success" ? (
        <SuccessSVG width={13.5} height={13.5} />
      ) : (
        <ErrorSVG width={13.5} height={13.5} />
      )}
      <Title status={status}>{text}</Title>
    </Container>
  );
}
