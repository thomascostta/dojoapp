import { Container, Image, Title } from "./styles";

export function HeaderHome() {
  const image = require("../../../assets/wkf.png");

  return (
    <Container>
      <Title>Mensalidades</Title>
      <Image source={image} />
    </Container>
  );
}
