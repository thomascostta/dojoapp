import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    birthday: "",
    cpf: "",
    address: "",
    numberAddress: "",
    cellPhone1: "",
    cellPhone2: "",
    cellPhoneMessage: "",
  },
  reducers: {
    setUserData: (state, action: PayloadAction<RootState["user"]>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.birthday = action.payload.birthday;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
      state.numberAddress = action.payload.numberAddress;
      state.cellPhone1 = action.payload.cellPhone1;
      state.cellPhone2 = action.payload.cellPhone2;
      state.cellPhoneMessage = action.payload.cellPhoneMessage;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
