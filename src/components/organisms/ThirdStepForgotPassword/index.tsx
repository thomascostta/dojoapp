import { useCallback, useEffect, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useUser } from "../../../context/user";

import { useSelectorStepForgotPassword } from "../../../store/Selector/selectorsAuth";
import {
  useDispatchSetStepForgotPassword,
  useDispatchSetUserVisibility,
} from "../../../store/Dispatch/dispatchAuth";

import { ContainerPasswordRequirements } from "./styles";
import { StatusText } from "../../atoms/StatusText";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { ButtonText } from "../../atoms/ButtonText";
import { StepsForm } from "../../molecules/StepsForm";
import { InputPassword } from "../../molecules/InputPassword";
import { HeaderSignIn } from "../../molecules/HeaderSignIn";
import { ModalTermsOfUse } from "../../molecules/ModalTermsOfUse";

type FormDataPassword = {
  newPassword: string;
  confirmNewPassword: string;
};

const schemaPassword = yup.object().shape({
  newPassword: yup.string().required("Informe a nova senha."),
  confirmNewPassword: yup
    .string()
    .required("Informe a nova senha.")
    .oneOf([yup.ref("newPassword")], "As senhas precisam ser iguais."),
});

export function ThirdStepForgotPassword() {
  const selectorStepForgotPassword = useSelectorStepForgotPassword();
  const dispatchSetStepForgotPassword = useDispatchSetStepForgotPassword();
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const { createPassword } = useUser();
  const [minChar, setMinChar] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [samePasswords, setSamePasswords] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const {
    control: controlPassword,
    handleSubmit: handleSubmitPassword,
    clearErrors: clearErrorsPassword,
    setError: setErrorPassword,
    formState: { errors: errorsPassword },
    watch,
  } = useForm({
    resolver: yupResolver<FormDataPassword>(schemaPassword),
  });

  const passwordRequirements = [
    { index: 1, text: "Possuir no mínimo 6 caracteres", checked: minChar },
    {
      index: 2,
      text: "Possuir ao menos um caractere especial",
      checked: specialChar,
    },
    {
      index: 3,
      text: "As senhas coincidem",
      checked: samePasswords,
    },
  ];

  const hasSpecialChar = /^(?=.*[`$!*&@$#?,.%()<>`])/;
  const has6Min = /^(?=^.{6,}$)/;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePassword = useCallback((newPassword: string) => {
    setMinChar(has6Min.test(newPassword));
    setSpecialChar(hasSpecialChar.test(newPassword));
  }, []);

  async function onSubmitPassword(passwordValue: FormDataPassword) {
    const { newPassword, confirmNewPassword } = passwordValue;
    if (newPassword === confirmNewPassword) {
      await createPassword(confirmNewPassword);
      try {
        clearErrorsPassword("confirmNewPassword");
        Alert.alert("Parabéns", `Senha alterada com sucesso!.`, [
          {
            text: "Acessar conta!",
            onPress: () => {
              dispatchSetUserVisibility("login");
              dispatchSetStepForgotPassword("first");
            },
          },
        ]);
      } catch (error) {
        setErrorPassword("confirmNewPassword", {
          type: "manual",
          message: "Verifique o seu e-mail ou senha.",
        });
      }
    }
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { newPassword, confirmNewPassword } = value;
      if (name === "newPassword") {
        return handlePassword(String(value.newPassword));
      }
      if (newPassword === confirmNewPassword) {
        setSamePasswords(true);
      } else {
        setSamePasswords(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <HeaderSignIn optionText="allVeryWell" />
        <StepsForm steps={selectorStepForgotPassword} marginBotton={16} />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
          extraHeight={100}
          enableOnAndroid
          style={{ marginTop: 10 }}
        >
          <Controller
            control={controlPassword}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPassword
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Senha"
                textLabel="Senha"
                marginBottom={10}
              />
            )}
            name="newPassword"
            rules={{ required: true }}
          />
          {errorsPassword.newPassword && (
            <StatusText
              text={errorsPassword.newPassword.message || ""}
              status="error"
            />
          )}
          <Controller
            control={controlPassword}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPassword
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Senha"
                textLabel="Confirme a senha"
              />
            )}
            name="confirmNewPassword"
            rules={{ required: true }}
          />
          <ContainerPasswordRequirements>
            {passwordRequirements.map((item, index) => {
              return (
                <StatusText
                  key={index}
                  text={item.text}
                  status={item.checked === false ? "error" : "success"}
                />
              );
            })}
          </ContainerPasswordRequirements>
          <ButtonPrimary
            label="Acessar"
            onPress={handleSubmitPassword(onSubmitPassword)}
            marginTop={29}
          />
          <ButtonText
            label="Cancelar e voltar ao login"
            marginTop={20.5}
            onPress={() => {
              dispatchSetUserVisibility("login");
              dispatchSetStepForgotPassword("first");
            }}
          />
        </KeyboardAwareScrollView>
        <ModalTermsOfUse
          isVisible={isModalVisible}
          onClose={toggleModal}
          onPressButton={() => {
            dispatchSetUserVisibility("login");
            dispatchSetStepForgotPassword("first");
          }}
        />
      </>
    </TouchableWithoutFeedback>
  );
}
