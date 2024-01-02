import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import {
  Container,
  ContentTitle,
  Title,
  ContentButton,
  ContentButtonCLose,
  ContentHeader,
  SubTitle,
  TitleChooseQuantity,
  ContentInput,
  ContentButtonBack,
  ContainerInput,
} from "./styles";
import { Input } from "../Input";
import { ButtonClose } from "../../atoms/ButtonClose";
import { ButtonChangeStudents } from "../../atoms/ButtonChangeStudents";
import { ButtonPrimary } from "../../atoms/ButtonPrimary";
import { ButtonBack } from "../../atoms/ButtonBack";
import { StatusText } from "../../atoms/StatusText";
import { useSelectorChooseQuantityStudents } from "../../../store/Selector/selectorsModalChangeUserSlice";
import { useDispatchChooseQuantityStudents } from "../../../store/Dispatch/dispatchModalChangeUser";

type SelectStudentsType =
  | "studentsAndGuardian"
  | "onlyGuardian"
  | "onlyStudent";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChangeUser: (selectChangeUser: SelectStudentsType) => void;
  onChooseQuantity: (chooseQuantity: number) => void;
}

export function ModalChangeUser({
  isOpen,
  onClose,
  onSelectChangeUser,
  onChooseQuantity,
}: ModalComponentProps) {
  const theme = useTheme();
  const [selecteType, setSelectType] =
    useState<SelectStudentsType>("onlyStudent");
  const selectorChooseQuantityStudents = useSelectorChooseQuantityStudents();
  const dispatchChooseQuantityStudents = useDispatchChooseQuantityStudents();

  const textStudentsGuardian = `Sou aluno(a) e responsável por aluno`;
  const textOnlyGuardian = `Sou responsável por aluno(a)`;

  function handleOnChangeText(value: string) {
    const isNumber = Number(value)

    dispatchChooseQuantityStudents(isNumber);
  }

  function handleSelectOnlyStudent() {
    setSelectType("onlyStudent");
    onSelectChangeUser(selecteType);
    dispatchChooseQuantityStudents(1);
    onClose();
  }

  function handleSelectStudentAndGuardian() {
    setSelectType("studentsAndGuardian");
  }

  function handleSelectOnlyStudentWithGuardian() {
    setSelectType("onlyGuardian");
  }

  function renderTitleChooseQuantity() {
    switch (selecteType) {
      case "onlyGuardian":
        return "Sou responsável por:";
      case "studentsAndGuardian":
        return "Sou aluno(a) e sou responsável pela quantidade de:";
      default:
        return "";
    }
  }

  function handleReturnFirstScreen() {
    setSelectType("onlyStudent");
  }

  function handleCloseAndSave() {
    if (selecteType === "onlyGuardian") {
      setSelectType("onlyGuardian");
      onSelectChangeUser(selecteType);
      onChooseQuantity(selectorChooseQuantityStudents);
      onClose();
    } else if (selecteType === "studentsAndGuardian") {
      setSelectType("studentsAndGuardian");
      onSelectChangeUser(selecteType);
      onChooseQuantity(selectorChooseQuantityStudents);
      onClose();
    }
  }
  function isSelectedValidNumer() {
    const validNumer =
      selectorChooseQuantityStudents === 0 ||
      selectorChooseQuantityStudents >= 7;

    return validNumer;
  }

  useEffect(() => {
    setSelectType("onlyStudent");
  }, [isOpen]);

  return (
    <Container isOpen={isOpen} onClosed={onClose}>
      <ContentHeader>
        {selecteType !== "onlyStudent" && (
          <ContentButtonBack>
            <ButtonBack onPress={handleReturnFirstScreen} />
          </ContentButtonBack>
        )}
        <ContentTitle>
          <Title>Escolha uma opção</Title>
        </ContentTitle>
        <ContentButtonCLose>
          <ButtonClose onPress={onClose} />
        </ContentButtonCLose>
      </ContentHeader>
      <ContentButton>
        {selecteType === "onlyStudent" ? (
          <>
            <ButtonChangeStudents
              label="Sou aluno (a)"
              onPress={handleSelectOnlyStudent}
            />
            <ButtonChangeStudents
              label={textStudentsGuardian}
              onPress={handleSelectStudentAndGuardian}
            />
            <ButtonChangeStudents
              label={textOnlyGuardian}
              onPress={handleSelectOnlyStudentWithGuardian}
            />
          </>
        ) : (
          <>
            <TitleChooseQuantity>
              {renderTitleChooseQuantity()}
            </TitleChooseQuantity>
            <ContainerInput>
              <ContainerInput>
                <ContentInput>
                  <Input
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={handleOnChangeText}
                    value={String(selectorChooseQuantityStudents)}
                    placeholderTextColor={theme.colors.black.primary}
                    style={{
                      color: theme.colors.black.primary,
                      width: 35,
                      fontSize: 16,
                    }}
                  />
                </ContentInput>
                <SubTitle>Aluno (s)</SubTitle>
              </ContainerInput>
            </ContainerInput>
            {isSelectedValidNumer() && (
              <StatusText text={"Informe um número válido"} status="error" />
            )}
            <ButtonPrimary
              label="Salvar e ir para próxima etapa"
              onPress={handleCloseAndSave}
              disabled={isSelectedValidNumer()}
            />
          </>
        )}
      </ContentButton>
    </Container>
  );
}
