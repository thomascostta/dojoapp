import { useDispatch } from "react-redux";
import {
  setChooseQuantityStudents,
  setSelectType,
  setVisibleModalChangeUser,
} from "../Slice/modalChangeUserSlice";

interface ModalProps {
  selectType:
    | "initialText"
    | "studentsAndGuardian"
    | "onlyGuardian"
    | "onlyStudent";
  visibleModalChangeUser: boolean;
  chooseQuantityStudents: number;
}

export const useDispatchSelectType = () => {
  const dispatch = useDispatch();

  const setSelect = (selectType: ModalProps["selectType"]) => {
    dispatch(setSelectType(selectType));
  };

  return setSelect;
};

export const useDispatchChooseQuantityStudents = () => {
  const dispatch = useDispatch();

  const setQuantity = (
    chooseQuantityStudents: ModalProps["chooseQuantityStudents"]
  ) => {
    dispatch(setChooseQuantityStudents(chooseQuantityStudents));
  };

  return setQuantity;
};

export const useDispatchVisibleModalChangeUser = () => {
  const dispatch = useDispatch();

  const setVisible = (
    visibleModalChangeUser: ModalProps["visibleModalChangeUser"]
  ) => {
    dispatch(setVisibleModalChangeUser(visibleModalChangeUser));
  };

  return setVisible;
};
