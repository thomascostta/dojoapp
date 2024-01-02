import { TouchableOpacityProps } from "react-native";
import { Container, ContentButtonBack } from "./styles";
import { ButtonBack } from "../../atoms/ButtonBack";
import { Header } from "../../atoms/Header";
import { HeaderText } from "../../atoms/HeaderText";

export function HeaderSignUp({ ...rest }: TouchableOpacityProps) {
  const textCreateSignUp = "Faça seu cadastro";

  return (
    <Container>
      <ContentButtonBack>
        <ButtonBack {...rest} />
      </ContentButtonBack>
      <Header />
      <HeaderText text={textCreateSignUp} marginTop={20} marginBotton={20} />
    </Container>
  );
}
