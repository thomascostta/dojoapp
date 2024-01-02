import { useDispatch } from "react-redux";
import {
  setStepForgotPassword,
  setUserVisibility,
  setStepCreateNewUser,
} from "../Slice/authSlice";

export const useDispatchSetStepForgotPassword = () => {
  const dispatch = useDispatch();

  const setStep = (newStep: string) => {
    dispatch(setStepForgotPassword(newStep));
  };

  return setStep;
};

export const useDispatchSetUserVisibility = () => {
  const dispatch = useDispatch();

  const setVisibility = (newStep: string) => {
    dispatch(setUserVisibility(newStep));
  };

  return setVisibility;
};

export const useDispatchSetStepCreateNewUser = () => {
  const dispatch = useDispatch();

  const setCreateNewUser = (newStep: string) => {
    dispatch(setStepCreateNewUser(newStep));
  };

  return setCreateNewUser;
};
