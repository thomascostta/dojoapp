import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useUser } from "../../../context/user";
import {
  useDispatchSetStepForgotPassword,
  useDispatchSetUserVisibility,
} from "../../../store/Dispatch/dispatchAuth";

import { StatusText } from "../../atoms/StatusText";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { ButtonText } from "../../atoms/ButtonText";
import { Input } from "../../molecules/Input";
import { StepsForm } from "../../molecules/StepsForm";
import { HeaderSignIn } from "../../molecules/HeaderSignIn";

type FormDataEmail = {
  email: string;
};

const schemaEmail = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
});

export function FirstStepForgotPassword() {
  const { emailValidation } = useUser();
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const dispatchSetStepForgotPassword = useDispatchSetStepForgotPassword();
  const {
    control,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver<FormDataEmail>(schemaEmail),
  });

  async function onSubmitEmail(emailValue: FormDataEmail) {
    const { email } = emailValue;
    emailValidation(email);
    try {
      clearErrors("email");
      dispatchSetStepForgotPassword("second");
    } catch (error) {
      isValid &&
        setError("email", {
          type: "manual",
          message: "Parece que você errou alguma coisa.",
        });
    }
  }

  return (
    <>
      <HeaderSignIn optionText="firstStep" />
      <StepsForm steps={"first"} marginBotton={16} />
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="E-mail"
            isError={!!errors.email}
            marginBottom={!errors.email ? 16 : 0}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && (
        <StatusText text={errors.email.message || ""} status="error" />
      )}

      <ButtonPrimary
        label="Continuar"
        marginTop={16}
        onPress={handleSubmit(onSubmitEmail)}
      />

      <ButtonText
        label="Cancelar e voltar ao login"
        marginTop={20.5}
        onPress={() => {
          dispatchSetUserVisibility("login");
          dispatchSetStepForgotPassword("first");
        }}
      />
    </>
  );
}
