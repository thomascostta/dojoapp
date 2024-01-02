import { Alert, TouchableOpacityProps } from "react-native";
import { useEffect, useState } from "react";

import { Container, TitleResend, ResendCode, TitleCounter } from "./styles";
import { LabelText } from "../../atoms/LabelText";

import ReloadSVG from "../../../assets/reload.svg";

export function TextCounter({ ...rest }: TouchableOpacityProps) {
  const [countdown, setCountdown] = useState(60);
  const requestNewCodeText = "Você já pode solicitar um novo código";

  const handleResendCode = () => {
    setCountdown(60);
    Alert.alert(
      "Código enviado",
      "Um novo código de verificação foi enviado ao seu e-mail.",
      [
        {
          text: "Fechar",
          style: "cancel",
        },
      ]
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleResendCode]);

  return (
    <Container>
      {!countdown && (
        <LabelText text={requestNewCodeText} textAlign="center " />
      )}
      {countdown > 0 && (
        <TitleCounter>Aguarde {countdown} segundos</TitleCounter>
      )}
      <ResendCode onPress={handleResendCode} {...rest} disabled={!!countdown}>
        <TitleResend isDisabled={!countdown}>Reenviar código</TitleResend>
        {!countdown && (
          <ReloadSVG width={16} height={16} style={{ marginLeft: 4 }} />
        )}
      </ResendCode>
    </Container>
  );
}
