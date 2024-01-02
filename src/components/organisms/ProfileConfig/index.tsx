import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";

import { useUser } from "../../../context/user";
import { useDispatchSetStepCreateNewUser } from "../../../store/Dispatch/dispatchAuth";
import { useDispatchUserConfig } from "../../../store/Dispatch/dispatchConfig";
import { useDispatchVisibleModalChangeUser } from "../../../store/Dispatch/dispatchModalChangeUser";
import {
  useSelectorChooseQuantityStudents,
  useSelectorSelectType,
  useSelectorVisibleModalChangeUser,
} from "../../../store/Selector/selectorsModalChangeUserSlice";

import {
  Container,
  ContentImage,
  Image,
  TitlePrice,
  ContentPayment,
  ContainerInput,
  ContentDueDate,
  TextExpiration,
  TouchablePickerSelect,
  ContentTouchableSelectStudents,
  TextPickerSelect,
} from "./styles";
import { Input } from "../../molecules/Input";
import { ModalSelectDate } from "../../atoms/ModalSelectDate";
import { ButtonChangeStudents } from "../../atoms/ButtonChangeStudents";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { converterStringToNumber } from "../../../utils/functions";

type SelectStudentsType =
  | "initialText"
  | "studentsAndGuardian"
  | "onlyGuardian"
  | "onlyStudent";

export function ProfileConfig() {
  const theme = useTheme();

  const dispatchVisibleModalChangeUser = useDispatchVisibleModalChangeUser();
  const dispatchSetStepCreateNewUser = useDispatchSetStepCreateNewUser();
  const dispatchUserConfig = useDispatchUserConfig();
  const selectorVisibleModalChangeUser = useSelectorVisibleModalChangeUser();
  const selectorSelectType = useSelectorSelectType();
  const selectorChooseQuantityStudents = useSelectorChooseQuantityStudents();
  const [selectedDate, setSelectedDate] = useState(5);
  const [visibleModalSelectDate, setVisibleModalSelectDate] = useState(false);
  const [priceMonthlyPayment, setPriceMonthlyPayment] = useState("90.00");

  const image = require("../../../assets/shotokan4.png");
  const { tokenFake, configUser } = useUser();

  const priceFormated = converterStringToNumber(priceMonthlyPayment);

  const toggleModal = () =>
    setVisibleModalSelectDate((previousState) => !previousState);

  const handleSelectDate = (selectedDateValue: number) => {
    setSelectedDate(selectedDateValue);
    setVisibleModalSelectDate(false);
  };
console.log('ProfileConfig    >>>>>>>',selectorVisibleModalChangeUser)
  function handleChangeQuantityUser() {
    dispatchVisibleModalChangeUser(true);
  }

  function renderTitleChooseQuantity() {
    switch (selectorSelectType) {
      case "initialText":
        return "Escolha uma opção";
      case "onlyGuardian":
        return `Sou responsável por ${selectorChooseQuantityStudents} aluno(s)`;
      case "studentsAndGuardian":
        return `Sou aluno(a) e responsável por ${selectorChooseQuantityStudents} aluno(s)`;
      case "onlyStudent":
        return "Sou apenas aluno(a)";
      default:
        return "";
    }
  }

  function onSubmit() {
    if (tokenFake === null) {
      if (selectorChooseQuantityStudents) {
        dispatchUserConfig({
          dueDate: selectedDate,
          monthlyPayment: priceFormated,
          numberOfStudents: selectorChooseQuantityStudents,
        });
        dispatchSetStepCreateNewUser("third");
      } else {
        Alert.alert(
          "Ops...",
          "Selecione uma opção se é aluno e/ ou responsável por algum aluno.",
          [
            {
              text: "Fechar",
              style: "cancel",
            },
          ]
        );
      }
    } else {
      configUser({
        dueDate: String(selectedDate),
        monthlyPayment: String(priceFormated),
        numberOfStudents: String(selectorChooseQuantityStudents),
      });
      dispatchUserConfig({
        dueDate: selectedDate,
        monthlyPayment: priceFormated,
        numberOfStudents: selectorChooseQuantityStudents,
      });
      Alert.alert("Parabéns!", "Os dados foram atualizados.", [
        {
          text: "Fechar",
          style: "cancel",
        },
      ]);
    }
  }

  useEffect(() => {
    if (selectorSelectType === "studentsAndGuardian") {
      if (selectorChooseQuantityStudents === 1) {
        setPriceMonthlyPayment("160.00");
      } else if (selectorChooseQuantityStudents === 2) {
        setPriceMonthlyPayment("240.00");
      } else if (selectorChooseQuantityStudents === 3) {
        setPriceMonthlyPayment("320.00");
      } else if (selectorChooseQuantityStudents === 4) {
        setPriceMonthlyPayment("440.00");
      } else if (selectorChooseQuantityStudents === 5) {
        setPriceMonthlyPayment("480.00");
      } else if (selectorChooseQuantityStudents === 6) {
        setPriceMonthlyPayment("560.00");
      }
    } else {
      if (selectorChooseQuantityStudents === 1) {
        setPriceMonthlyPayment("90.00");
      } else if (selectorChooseQuantityStudents === 2) {
        setPriceMonthlyPayment("160.00");
      } else if (selectorChooseQuantityStudents === 3) {
        setPriceMonthlyPayment("240.00");
      } else if (selectorChooseQuantityStudents === 4) {
        setPriceMonthlyPayment("320.00");
      } else if (selectorChooseQuantityStudents === 5) {
        setPriceMonthlyPayment("440.00");
      } else if (selectorChooseQuantityStudents === 6) {
        setPriceMonthlyPayment("480.00");
      }
    }
  }, [selectorVisibleModalChangeUser]);

  return (
    <Container>
      <ContentPayment>
        <TitlePrice>
          {selectorSelectType === "onlyStudent"
            ? "Mensalidade:"
            : "Mensalidade Total:"}
        </TitlePrice>
        <ContainerInput>
          <Input
            onChangeText={setPriceMonthlyPayment}
            value={priceMonthlyPayment}
            placeholder="0.00"
            type="type_currency"
            keyboardType="numeric"
            editable={false}
          />
        </ContainerInput>
      </ContentPayment>

      <ContentDueDate>
        <TextExpiration>Dia do vencimento:</TextExpiration>
        <TouchablePickerSelect onPress={toggleModal}>
          <TextPickerSelect>{selectedDate}</TextPickerSelect>
        </TouchablePickerSelect>
      </ContentDueDate>

      <ContentTouchableSelectStudents>
        <ButtonChangeStudents
          label={renderTitleChooseQuantity()}
          onPress={handleChangeQuantityUser}
        />
      </ContentTouchableSelectStudents>
      <>
        <ModalSelectDate
          isOpen={visibleModalSelectDate}
          onClose={() => setVisibleModalSelectDate(false)}
          onSelectDate={handleSelectDate}
        />
        <ContentImage>
          <Image source={image} />
        </ContentImage>
      </>
      <ButtonPrimary
        label={tokenFake === null ? "Próxima etapa" : "Salvar"}
        onPress={onSubmit}
        style={{ borderColor: theme.colors.white.third, borderWidth: 2 }}
      />
    </Container>
  );
}
