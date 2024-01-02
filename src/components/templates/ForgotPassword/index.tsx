import { useEffect } from "react";
import { BackHandler } from "react-native";

import { useSelectorStepForgotPassword } from "../../../store/Selector/selectorsAuth";
import {
  useDispatchSetStepForgotPassword,
  useDispatchSetUserVisibility,
} from "../../../store/Dispatch/dispatchAuth";

import { Container, ContentForm } from "./styles";
import { FirstStepForgotPassword } from "../../organisms/FirstStepForgotPassword";
import { SecondStepForgotPassword } from "../../organisms/SecondStepForgotPassword";
import { ThirdStepForgotPassword } from "../../organisms/ThirdStepForgotPassword";

export function ForgotPassword() {
  const selectorStepForgotPassword = useSelectorStepForgotPassword();
  const dispatchSetStepForgotPassword = useDispatchSetStepForgotPassword();
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();

  const renderStepComponent = () => {
    switch (selectorStepForgotPassword) {
      case "first":
        return <FirstStepForgotPassword />;
      case "second":
        return <SecondStepForgotPassword />;
      case "third":
        return <ThirdStepForgotPassword />;
      default:
        return <FirstStepForgotPassword />;
    }
  };

  useEffect(() => {
    const onBackPress = () => {
      dispatchSetUserVisibility("login");
      dispatchSetStepForgotPassword("first");

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <Container>
      <ContentForm>{renderStepComponent()}</ContentForm>
    </Container>
  );
}
