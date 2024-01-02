import { Container, Title } from "./styles";

interface ILabelTextProps {
  text: string;
  marginTop?: number;
  marginBotton?: number;
  textAlign?: "left" | "center " | "right";
}

export function LabelText({
  marginTop = 0,
  marginBotton = 0,
  text,
  textAlign = "left",
}: ILabelTextProps) {
  return (
    <Container marginTop={marginTop} marginBotton={marginBotton}>
      <Title textAlign={textAlign}>{text}</Title>
    </Container>
  );
}
