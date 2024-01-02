import { ImageSourcePropType } from "react-native";
import { Container, Image } from "./styles";

interface Props {
  source: ImageSourcePropType;
}

export function Avatar({ source }: Props) {
  return (
    <Container>
      <Image source={source} />
    </Container>
  );
}
