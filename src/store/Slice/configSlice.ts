import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  monthlyPayment: number;
  dueDate: number;
  numberOfStudents: number;
}

const configSlice = createSlice({
  name: "config",
  initialState: {
    monthlyPayment: 90,
    dueDate: 5,
    numberOfStudents: 1,
  } as ConfigState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigState>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;
