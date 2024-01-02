import { Alert, KeyboardTypeOptions } from "react-native";
import { useCallback, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatchUserData } from "../../../store/Dispatch/dispatchUser";
import { useDispatchSetStepCreateNewUser } from "../../../store/Dispatch/dispatchAuth";
import { useSelectorUserData } from "../../../store/Selector/selectorsUser";
import { useSelectorUserConfig } from "../../../store/Selector/selectorsConfig";

import { useUser } from "../../../context/user";
import { getAge, validarCPF } from "../../../utils/functions";

import { Container } from "./styles";
import { StatusText } from "../../atoms/StatusText";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { Input } from "../../molecules/Input";

type FormData = {
  email: string;
  name: string;
  birthday: string;
  cpf: string;
  address: string;
  numberAddress: string;
  cellPhone1: string;
  cellPhone2?: string;
  cellPhoneMessage: string;
};

export function SignUpProfile() {
  const { tokenFake, registerUser } = useUser();
  const dispatchSetStepCreateNewUser = useDispatchSetStepCreateNewUser();
  const dispatchUserData = useDispatchUserData();
  const selectorUserData = useSelectorUserData();
  const selectorUserConfig = useSelectorUserConfig();

  const validNumber =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    name: yup
      .string()
      .min(3, "Digite pelo menos três letras do Nome e do Sobrenome")
      .required("Insira seu nome")
      .matches(/^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/, "Apenas letras")
      .test(
        "word-count",
        "Informe ao menos um nome e sobrenome",
        (value: any) => {
          if (value !== undefined) {
            const primaryName =
              value.split(" ").slice(0, 1).join("").length >= 3;
            const secondaryName =
              value.split(" ").slice(1, 2).join("").length >= 3;
            const isValid = primaryName && secondaryName;
            return isValid;
          }
          return true;
        }
      ),
    birthday: yup
      .string()
      .required("Informe a data de nascimento")
      .test(
        "valid-birthday",
        "Precisa ter mais de 16 anos para fazer o cadastro",
        (birth) => handleValidateAge(String(birth))
      ),
    cpf: yup
      .string()
      .required("Informe o CPF")
      .test("valid-cpf", "Informe um cpf válido", (value) =>
        handleValidateCpf(value)
      ),
    address: yup
      .string()
      .min(6, "Informe um endereço válido")
      .required("O endereço é obrigatório"),
    numberAddress: yup
      .string()
      .min(2, "No mínimo dois dígitos")
      .required("O número do endereço é obrigatório"),
    cellPhone1: yup
      .string()
      .required("Informe o telefone")
      .matches(validNumber, "Digite um número válido"),
    cellPhone2: yup.string(),
    cellPhoneMessage: yup
      .string()
      .required("Informe o telefone de alguma pessoa próxima a você"),
  });

  const {
    control: control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver<FormData>(schema),
  });

  async function onSubmit(data: FormData) {
    const {
      email,
      name,
      cpf,
      birthday,
      address,
      numberAddress,
      cellPhone1,
      cellPhone2,
      cellPhoneMessage,
    } = data;
    const cellPhone2Validation =
      typeof cellPhone2 === "string" ? cellPhone2 : "";
    const userData = {
      email,
      name,
      cpf,
      birthday,
      address,
      numberAddress,
      cellPhone1,
      cellPhone2: cellPhone2Validation,
      cellPhoneMessage,
    };
    registerUser({
      userData: { ...userData, ...selectorUserConfig },
      isToken: false,
    });
    dispatchUserData(userData);

    if (tokenFake === null) {
      dispatchSetStepCreateNewUser("second");
    } else {
      Alert.alert(
        "Cadastrado com sucesso",
        "Parabéns Samurai! Seus dados estão atualizados.",
        [
          {
            text: "Fechar",
            style: "cancel",
          },
        ]
      );
    }
  }

  const handleValidateCpf = useCallback((cpf: string | undefined) => {
    if (cpf?.length === 14) {
      if (validarCPF(cpf.replace(/\D/g, ""))) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }, []);

  const handleValidateAge = useCallback((birthday: string) => {
    if (getAge(birthday) <= 15 || getAge(birthday) >= 110) {
      return false;
    } else {
      return true;
    }
  }, []);

  useEffect(() => {
    if (selectorUserData.email !== "") {
      setValue("email" as keyof FormData, selectorUserData.email);
      setValue("name" as keyof FormData, selectorUserData.name);
      setValue("birthday" as keyof FormData, selectorUserData.birthday);
      setValue("cpf" as keyof FormData, selectorUserData.cpf);
      setValue("address" as keyof FormData, selectorUserData.address);
      setValue(
        "numberAddress" as keyof FormData,
        selectorUserData.numberAddress
      );
      setValue("cellPhone1" as keyof FormData, selectorUserData.cellPhone1);
      setValue(
        "cellPhoneMessage" as keyof FormData,
        selectorUserData.cellPhoneMessage
      );
    }
  }, [onSubmit]);

  const renderInput = (
    label: string,
    name: keyof FormData,
    placeholder: string,
    type?: string,
    keyboardType?: KeyboardTypeOptions | undefined
  ) => (
    <Controller
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          textLabel={label}
          onChangeText={onChange}
          onBlur={onBlur as () => void}
          value={value}
          placeholder={placeholder}
          isError={!!errors[name]}
          marginBottom={!errors[name] ? 16 : 0}
          type={type}
          keyboardType={keyboardType}
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  );

  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            textLabel="E-mail"
            onChangeText={onChange}
            value={value}
            placeholder="seuemail@email.com"
            isError={!!errors.email}
            marginBottom={!errors.email ? 16 : 0}
            editable={selectorUserData.email === ""}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && (
        <StatusText text={errors.email.message || ""} status="error" />
      )}

      {renderInput("Nome", "name", "Seu nome")}
      {errors.name && (
        <StatusText text={errors.name.message || ""} status="error" />
      )}

      {renderInput(
        "Data de nascimento",
        "birthday",
        "00/00/0000",
        "type_birthday",
        "numeric"
      )}
      {errors.birthday && (
        <StatusText text={errors.birthday.message || ""} status="error" />
      )}

      {renderInput("CPF", "cpf", "CPF", "type_CPF", "numeric")}
      {errors.cpf && (
        <StatusText text={errors.cpf.message || ""} status="error" />
      )}

      {renderInput("Endereço", "address", "Endereço")}
      {errors.address && (
        <StatusText text={errors.address.message || ""} status="error" />
      )}

      {renderInput("Número", "numberAddress", "Número da residência")}
      {errors.numberAddress && (
        <StatusText text={errors.numberAddress.message || ""} status="error" />
      )}

      {renderInput(
        "Celular 1",
        "cellPhone1",
        "(11) 00000 0000",
        "type_phone",
        "numeric"
      )}
      {errors.cellPhone1 && (
        <StatusText text={errors.cellPhone1.message || ""} status="error" />
      )}

      {renderInput(
        "Celular 2",
        "cellPhone2",
        "(11) 00000 0000",
        "type_phone",
        "numeric"
      )}
      {errors.cellPhone2 && (
        <StatusText text={errors.cellPhone2.message || ""} status="error" />
      )}

      {renderInput(
        "Número para recado",
        "cellPhoneMessage",
        "(11) 00000 0000",
        "type_phone",
        "numeric"
      )}
      {errors.cellPhoneMessage && (
        <StatusText
          text={errors.cellPhoneMessage.message || ""}
          status="error"
        />
      )}

      <ButtonPrimary
        label={tokenFake === null ? "Próxima etapa" : "Salvar"}
        marginTop={16}
        marginBotton={16}
        onPress={handleSubmit(onSubmit)}
      />
    </Container>
  );
}
