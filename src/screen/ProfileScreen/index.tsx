import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "styled-components";

import { useUser } from "../../context/user";

import {
  useDispatchChooseQuantityStudents,
  useDispatchSelectType,
  useDispatchVisibleModalChangeUser,
} from "../../store/Dispatch/dispatchModalChangeUser";
import { useDispatchSetUserVisibility } from "../../store/Dispatch/dispatchAuth";
import { useSelectorVisibleModalChangeUser } from "../../store/Selector/selectorsModalChangeUserSlice";

import {
  Container,
  Gradiente,
  BackgroundContainer,
  Options,
  OptionTitle,
  Option,
} from "./styles";
import { Header } from "../../components/atoms/Header";
import { SignUpProfile } from "../../components/organisms/SignUpProfile";
import { PasswordChange } from "../../components/organisms/PasswordChange";
import { ProfileConfig } from "../../components/organisms/ProfileConfig";
import { ModalChangeUser } from "../../components/molecules/ModalChangeUser";

export function ProfileScreen() {
  const dispatchChooseQuantityStudents = useDispatchChooseQuantityStudents();
  const dispatchSelectType = useDispatchSelectType();
  const dispatchVisibleModalChangeUser = useDispatchVisibleModalChangeUser();
  const dispatchSetUserVisibility = useDispatchSetUserVisibility();
  const selectorVisibleModalChangeUser = useSelectorVisibleModalChangeUser();
  const { signOut } = useUser();
  const theme = useTheme();
  const [option, setOption] = useState<
    "dataEdit" | "passwordEdit" | "configEdit"
  >("dataEdit");

  function handleOptionChange(
    optionSelected: "dataEdit" | "passwordEdit" | "configEdit"
  ) {
    setOption(optionSelected);
  }

  function handleSignOut() {
    dispatchSetUserVisibility("login");
    signOut();
  }

  const renderContent = () => {
    switch (option) {
      case "dataEdit":
        return <SignUpProfile />;
      case "passwordEdit":
        return <PasswordChange />;
      case "configEdit":
        return <ProfileConfig />;
      default:
        return null;
    }
  };

  return (
    <BackgroundContainer source={theme.images.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Header isIcon onPress={handleSignOut} />
          <Container>
            <Options>
              <Option
                active={option === "dataEdit"}
                onPress={() => handleOptionChange("dataEdit")}
              >
                <OptionTitle active={option === "dataEdit"}>Perfil</OptionTitle>
              </Option>
              <Option
                active={option === "passwordEdit"}
                onPress={() => handleOptionChange("passwordEdit")}
              >
                <OptionTitle active={option === "passwordEdit"}>
                  Trocar senha
                </OptionTitle>
              </Option>
              <Option
                active={option === "configEdit"}
                onPress={() => handleOptionChange("configEdit")}
              >
                <OptionTitle active={option === "configEdit"}>
                  Configuração
                </OptionTitle>
              </Option>
            </Options>
            <KeyboardAwareScrollView
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}
              resetScrollToCoords={{ x: 0, y: 0 }}
              extraScrollHeight={100}
              enableOnAndroid
            >
              {renderContent()}
            </KeyboardAwareScrollView>
          </Container>

          <Gradiente
            colors={["transparent", theme.colors.red.primary]}
            locations={[0.4, 1]}
          />
          <ModalChangeUser
            isOpen={selectorVisibleModalChangeUser}
            onClose={() => dispatchVisibleModalChangeUser(false)}
            onSelectChangeUser={(item) => dispatchSelectType(item)}
            onChooseQuantity={(item) => dispatchChooseQuantityStudents(item)}
          />
        </>
      </TouchableWithoutFeedback>
    </BackgroundContainer>
  );
}
