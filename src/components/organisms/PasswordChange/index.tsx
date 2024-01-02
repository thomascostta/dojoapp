import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

import { useUser } from "../../../context/user";

import {
  Container,
  ContainerPasswordRequirements,
  ContentInput,
} from "./styles";
import { StatusText } from "../../atoms/StatusText";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { InputPassword } from "../../molecules/InputPassword";

import { Alert } from "react-native";

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

type InputData = {
  textLabel: string;
  name: keyof FormData;
};

export function PasswordChange() {
  const { navigate } = useNavigation();
  const { tokenFake, updatePassword } = useUser();

  const [minChar, setMinChar] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [samePasswords, setSamePasswords] = useState(false);

  const schema = yup.object().shape({
    currentPassword: yup.string().required("Informe a nova senha."),
    newPassword: yup.string().required("Informe a nova senha."),
    confirmNewPassword: yup
      .string()
      .required("Informe a nova senha.")
      .oneOf([yup.ref("newPassword")], "As senhas precisam ser iguais."),
  });

  const {
    control: control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<FormData>(schema),
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

  const handlePassword = useCallback((newPassword: string) => {
    setMinChar(has6Min.test(newPassword));
    setSpecialChar(hasSpecialChar.test(newPassword));
  }, []);

  async function onSubmit(data: FormData) {
    try {
      const { currentPassword, confirmNewPassword } = data;

      await updatePassword(confirmNewPassword, currentPassword);

      if (tokenFake === null) {
        navigate("HomeStackPublic");
      } else {
        Alert.alert("Senha atualizada", "Sua senha está atualizada", [
          {
            text: "Fechar",
            style: "cancel",
          },
        ]);
      }
    } catch (error) {
      Alert.alert(
        "Opsss! ;(",
        "A nova senha precisa ser diferente da antiga.",
        [
          {
            text: "Fechar",
            style: "cancel",
          },
        ]
      );
    }
  }

  const renderInputPassword = ({ textLabel, name }: InputData) => (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <InputPassword
          textLabel={textLabel}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={"Senha"}
          marginBottom={16}
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  );

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
    <Container>
      <ContentInput>
        {renderInputPassword({
          textLabel: "Senha atual",
          name: "currentPassword",
        })}
        {errors.currentPassword && (
          <StatusText
            text={errors.currentPassword.message || ""}
            status="error"
          />
        )}

        {renderInputPassword({ textLabel: "Nova senha", name: "newPassword" })}
        {errors.newPassword && (
          <StatusText text={errors.newPassword.message || ""} status="error" />
        )}

        {renderInputPassword({
          textLabel: "Confirme a nova senha",
          name: "confirmNewPassword",
        })}

        <ContainerPasswordRequirements>
          {passwordRequirements.map((item, index) => (
            <StatusText
              key={index}
              text={item.text}
              status={item.checked === false ? "error" : "success"}
            />
          ))}
        </ContainerPasswordRequirements>
      </ContentInput>

      <ButtonPrimary
        label="Salvar"
        marginTop={16}
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}
