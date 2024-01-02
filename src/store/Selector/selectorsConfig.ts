import { RootState } from "../types";
import { useSelector } from "react-redux";

export const useSelectorUserConfig = () => {
  return useSelector((state: RootState) => state.config);
};
