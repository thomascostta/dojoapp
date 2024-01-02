import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";

import {
  useDispatchChooseQuantityStudents,
  useDispatchSelectType,
  useDispatchVisibleModalChangeUser,
} from "../../store/Dispatch/dispatchModalChangeUser";
import { useSelectorUserVisibility } from "../../store/Selector/selectorsAuth";
import { useSelectorVisibleModalChangeUser } from "../../store/Selector/selectorsModalChangeUserSlice";

import { Container, BackgroundContainer } from "./styles";
import { FooterInfo } from "../../components/atoms/FooterInfo";
import { ModalChangeUser } from "../../components/molecules/ModalChangeUser";
import { ForgotPassword } from "../../components/templates/ForgotPassword";
import { SignUpSettings } from "../../components/templates/SignUpSettings";
import { SignIn } from "../../components/templates/SignIn";

export function InitialScreen() {
  const theme = useTheme();
  const dispatchChooseQuantityStudents = useDispatchChooseQuantityStudents();
  const dispatchSelectType = useDispatchSelectType();
  const dispatchVisibleModalChangeUser = useDispatchVisibleModalChangeUser();
  const selectorVisibleModalChangeUser = useSelectorVisibleModalChangeUser();
  const selectorUserVisibility = useSelectorUserVisibility();

  const renderContent = () => {
    switch (selectorUserVisibility) {
      case "login":
        return <SignIn />;
      case "newUser":
        return <SignUpSettings />;
      case "forgotPassword":
        return <ForgotPassword />;
      default:
        return <SignIn />;
    }
  };

  return (
    <BackgroundContainer source={theme.images.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>{renderContent()}</Container>
      </TouchableWithoutFeedback>
      <ModalChangeUser
        isOpen={selectorVisibleModalChangeUser}
        onClose={() => dispatchVisibleModalChangeUser(false)}
        onSelectChangeUser={(item) => dispatchSelectType(item)}
        onChooseQuantity={(item) => dispatchChooseQuantityStudents(item)}
      />
      {selectorUserVisibility === "login" && <FooterInfo />}
    </BackgroundContainer>
  );
}
