import { Checkbox } from "../../atoms/Checkbox";
import { Container, Title } from "./styles";

export function TermsOfUseOption() {
  return (
    <Container>
      <Checkbox isCheckedValue={true}/>
      <Title>Li e aceito os Termos da KarateApp</Title>
    </Container>
  );
}
