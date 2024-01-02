import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./Slice/authSlice";
import userReducer from "./Slice/userSlice";
import configReducer from "./Slice/configSlice";
import modalChangeUser from "./Slice/modalChangeUserSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  config: configReducer,
  modalChange: modalChangeUser,
});

export default rootReducer;
