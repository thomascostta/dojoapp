import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatchSetUserVisibility } from "../../../store/Dispatch/dispatchAuth";

import { Container, ContentForm } from "./styles";
import { StatusText } from "../../atoms/StatusText";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { ButtonText } from "../../atoms/ButtonText";
import { HeaderSignIn } from "../../molecules/HeaderSignIn";
import { Input } from "../../molecules/Input";
import { InputPassword } from "../../molecules/InputPassword";
import { useUser } from "../../../context/user";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

export function SignIn() {
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { signIn } = useUser();

  const textButtonText = "Criar conta";

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<FormData>(schema),
  });

  async function onSubmit(emailValue: FormData) {
    const { email, password } = emailValue;
    try {
      await signIn({ email, password });
      navigate("HomeStackPublic");
    } catch (error) {
      setError("email", { message: "E-mail e/ou senhas inválidos" });
    }
  }

  return (
    <Container>
      <ContentForm>
        <HeaderSignIn optionText="useYourEmail" />
        <ButtonText
          label={textButtonText}
          marginBotton={18.5}
          onPress={() => dispatchSetUserVisibility("newUser")}
          hasIcon
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
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

        <Controller
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputPassword
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Senha"
              textLabel="Senha"
            />
          )}
          name="password"
          rules={{ required: true }}
        />
        {errors.password && (
          <StatusText text={errors.password.message || ""} status="error" />
        )}
        <ButtonPrimary
          label="Acessar"
          onPress={handleSubmit(onSubmit)}
          marginTop={32}
        />

        <ButtonText
          label="Esqueceu sua senha?"
          onPress={() => dispatchSetUserVisibility("forgotPassword")}
          marginTop={20.5}
        />
      </ContentForm>
    </Container>
  );
}
