import { configureStore } from "@reduxjs/toolkit";
import { isDevelopment } from "constants/common.constant";
import cartSelectedReducer from "./reducers/cartSelected.reducer";

export default configureStore({
  reducer: {
    cartSelected: cartSelectedReducer,
  },
  devTools: isDevelopment || Boolean(localStorage.getItem("redux-debug")),
});
