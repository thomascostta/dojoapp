import { Container, Title } from "./styles";

interface PropsHeaderText {
  text: string;
  marginTop?: number;
  marginBotton?: number;
}

export function HeaderText({
  text,
  marginBotton = 0,
  marginTop = 0,
}: PropsHeaderText) {
  return (
    <Container marginTop={marginTop} marginBotton={marginBotton}>
      <Title>{text}</Title>
    </Container>
  );
}
