import { RootState } from "../types";
import { useSelector } from "react-redux";

export const useSelectorUserData = () => {
  return useSelector((state: RootState) => state.user);
};
