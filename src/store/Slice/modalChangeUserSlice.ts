import { createSlice } from "@reduxjs/toolkit";

const modalChangeUserSlice = createSlice({
  name: "auth",
  initialState: {
    visibleModalChangeUser: false,
    selectType: "initialText",
    chooseQuantityStudents: 0,
  },
  reducers: {
    setVisibleModalChangeUser: (state, action) => {
      state.visibleModalChangeUser = action.payload;
    },
    setSelectType: (state, action) => {
      state.selectType = action.payload;
    },
    setChooseQuantityStudents: (state, action) => {
      console.log('')
      state.chooseQuantityStudents = action.payload;
    },
  },
});

export const {
  setVisibleModalChangeUser,
  setSelectType,
  setChooseQuantityStudents,
} = modalChangeUserSlice.actions;
export default modalChangeUserSlice.reducer;
