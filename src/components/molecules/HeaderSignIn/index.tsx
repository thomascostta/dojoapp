import { Header } from "../../atoms/Header";
import { HeaderText } from "../../atoms/HeaderText";
import { Container } from "./styles";

interface IHeaderSignInProps {
  optionText:
    | "useYourEmail"
    | "youWillReceive"
    | "firstStep"
    | "allVeryWell"
    | "yourFirstAccess";
}

export function HeaderSignIn({ optionText }: IHeaderSignInProps) {
  const textUseYourEmail =
    "Utilize o seu e-mail cadastrado e a sua senha para acessar sua conta no KarateApp.";
  const textYouWillReceive =
    "Você receberá um código de verificação.\nDigite ele abaixo:";
  const textFirstStep =
    "O primeiro passo é digitar o e-mail cadastrado na sua conta.";
  const textAllVeryWell = `Tudo certo!\nAgora crie uma nova senha.`;
  const textYourFirstAccess =
    "Parece que este é o seu primeiro acesso!\nVocê precisa criar sua nova senha.";

  const getTextHeader = (option: string): string => {
    switch (option) {
      case "useYourEmail":
        return textUseYourEmail;
      case "youWillReceive":
        return textYouWillReceive;
      case "firstStep":
        return textFirstStep;
      case "allVeryWell":
        return textAllVeryWell;
      case "yourFirstAccess":
        return textYourFirstAccess;
      default:
        return "";
    }
  };

  return (
    <Container>
      <Header />
      <HeaderText text={getTextHeader(optionText)} marginTop={48} marginBotton={32} />
    </Container>
  );
}
