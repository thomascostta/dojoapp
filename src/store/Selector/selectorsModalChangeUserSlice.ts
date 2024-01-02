import { RootState } from "../types";
import { useSelector } from "react-redux";

export const useSelectorSelectType = () => {
  return useSelector((state: RootState) => state.modalChange.selectType);
};

export const useSelectorChooseQuantityStudents = () => {
  return useSelector((state: RootState) => state.modalChange.chooseQuantityStudents);
};

export const useSelectorVisibleModalChangeUser = () => {
  return useSelector((state: RootState) => state.modalChange.visibleModalChangeUser);
};

