import { useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { LabelText } from "../../atoms/LabelText";
import {
  Container,
  Content,
  Input,
  ChangePasswordVisibilityButton,
} from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface ITextInputPropsProps extends TextInputProps {
  marginBottom?: number;
  marginTop?: number;
  textLabel: string;
}

export function InputPassword({
  marginTop = 0,
  marginBottom = 0,
  textLabel,
  ...rest
}: ITextInputPropsProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container marginBottom={marginBottom} marginTop={marginTop}>
      <LabelText text={textLabel} />
      <Content>
        <Input
          {...rest}
          secureTextEntry={isPasswordVisible}
          autoCorrect={false}
        />
        <ChangePasswordVisibilityButton
          onPress={handlePasswordVisibilityChange}
        >
          <Entypo
            name={isPasswordVisible ? "eye" : "eye-with-line"}
            size={15}
            color={theme.colors.white.primary}
          />
        </ChangePasswordVisibilityButton>
      </Content>
    </Container>
  );
}
