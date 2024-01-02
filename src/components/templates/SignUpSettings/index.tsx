import { useEffect } from "react";
import { BackHandler, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  useDispatchSetStepCreateNewUser,
  useDispatchSetUserVisibility,
} from "../../../store/Dispatch/dispatchAuth";
import { useSelectorStepCreateNewUser } from "../../../store/Selector/selectorsAuth";

import { Container, ContentForm } from "./styles";
import { StepSignUpFirst } from "../../organisms/StepSignUpFirst";
import { StepSignUpSecond } from "../../organisms/StepSignUpSecond";
import { StepSignUpThird } from "../../organisms/StepSignUpThird";
import { StepsForm } from "../../molecules/StepsForm";
import { HeaderSignUp } from "../../molecules/HeaderSignUp";

export function SignUpSettings() {

  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const dispatchSetStepCreateNewUser = useDispatchSetStepCreateNewUser();
  const selectorStepCreateNewUser = useSelectorStepCreateNewUser();

  const renderStepComponent = () => {
    switch (selectorStepCreateNewUser) {
      case "first":
        return <StepSignUpFirst />;
      case "second":
        return <StepSignUpSecond />;
      case "third":
        return <StepSignUpThird />;
      default:
        return <StepSignUpFirst />;
    }
  };

  function handleGoBack() {
    dispatchSetUserVisibility("login");
    dispatchSetStepCreateNewUser("first");
  }

  useEffect(() => {
    const onBackPress = () => {
      dispatchSetUserVisibility("login");
      dispatchSetStepCreateNewUser("first");

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <HeaderSignUp onPress={handleGoBack} />
          <StepsForm steps={selectorStepCreateNewUser} />
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}
            extraHeight={100}
            enableOnAndroid
            style={{ marginTop: 10 }}
          >
            <ContentForm>{renderStepComponent()}</ContentForm>
          </KeyboardAwareScrollView>
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
}
