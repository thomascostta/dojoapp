import { useDispatch } from "react-redux";

import { setUserData } from "../Slice/userSlice";
import { RootState } from "../types";

export const useDispatchUserData = () => {
  const dispatch = useDispatch();

  const setUser = (newStep: RootState["user"]) => {
    dispatch(setUserData(newStep));
  };

  return setUser;
};
