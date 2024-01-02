import { RootState } from "../types";
import { useSelector } from "react-redux";

export const useSelectorStepForgotPassword = () => {
  return useSelector((state: RootState) => state.auth.stepForgotPassword);
};

export const useSelectorUserVisibility = () => {
  return useSelector((state: RootState) => state.auth.userVisibility);
};

export const useSelectorStepCreateNewUser = () => {
  return useSelector((state: RootState) => state.auth.stepCreateNewUser);
};