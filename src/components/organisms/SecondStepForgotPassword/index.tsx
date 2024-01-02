import { useState } from "react";
import { Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { StyleSheet } from "react-native";

import { useUser } from "../../../context/user";

import { defaultTheme } from "../../../theme/default";

import { Container } from "./styles";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { ButtonText } from "../../atoms/ButtonText";
import { StatusText } from "../../atoms/StatusText";
import { LabelText } from "../../atoms/LabelText";
import { StepsForm } from "../../molecules/StepsForm";
import { TextCounter } from "../../molecules/TextCounter";
import { HeaderSignIn } from "../../molecules/HeaderSignIn";
import { useSelectorStepForgotPassword } from "../../../store/Selector/selectorsAuth";
import {
  useDispatchSetStepForgotPassword,
  useDispatchSetUserVisibility,
} from "../../../store/Dispatch/dispatchAuth";

export function SecondStepForgotPassword() {
  const CELL_COUNT = 6;
  const selectorStepForgotPassword = useSelectorStepForgotPassword();
  const dispatchSetStepForgotPassword = useDispatchSetStepForgotPassword();
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const { codeSending } = useUser();

  const [isErrorVerification, setIsErrorVerification] = useState(false);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const verificationText = "Código de verificação";
  const errorText = "Verifique o código digitado e tente novamente.";

  async function handleCodeVerification(valueCode: string) {
    try {
      if (valueCode.length === 6) {
        const result = await codeSending(Number(valueCode));
        if (result) {
          setIsErrorVerification(false);
          dispatchSetStepForgotPassword("third");
        } else {
          setIsErrorVerification(true);
        }
      } else {
        setIsErrorVerification(true);
      }
    } catch (error) {
      setIsErrorVerification(true);
    }
  }

  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    title: { textAlign: "center", fontSize: 30 },
    cell: {
      width: 48,
      height: 48,
      borderWidth: 2,
      borderRadius: 12,
      lineHeight: 38,
      textAlign: "center",
      borderColor:
        isErrorVerification && value.length === 6
          ? defaultTheme.colors.red.primary
          : defaultTheme.colors.white.primary,
      color: defaultTheme.colors.white.primary,
      fontSize: defaultTheme.fontSizes._16,
      fontFamily: defaultTheme.fontFamily.geologica_400,
    },
    focusCell: {
      borderColor: defaultTheme.colors.orange.secondary,
    },
  });

  return (
    <Container>
      <HeaderSignIn optionText="youWillReceive" />
      <StepsForm steps={selectorStepForgotPassword} marginBotton={16} />
      <LabelText text={verificationText} marginBotton={6} />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {isErrorVerification && <StatusText text={errorText} status="error" />}
      <TextCounter />
      <ButtonPrimary
        label="Validar"
        marginTop={16}
        onPress={() => handleCodeVerification(value)}
      />
      <ButtonText
        label="Cancelar e voltar ao login"
        marginTop={20.5}
        onPress={() => {
          dispatchSetUserVisibility("login");
          dispatchSetStepForgotPassword("first");
        }}
      />
    </Container>
  );
}
