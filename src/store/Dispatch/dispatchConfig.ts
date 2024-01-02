import { useDispatch } from "react-redux";
import { setConfig } from "../Slice/configSlice";
import { RootState } from "../types";

export const useDispatchUserConfig = () => {
  const dispatch = useDispatch();

  const setUserConfig = (newStep: RootState["config"]) => {
    dispatch(setConfig(newStep));
  };

  return setUserConfig;
};
