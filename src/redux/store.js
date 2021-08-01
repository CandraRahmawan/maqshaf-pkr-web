import { configureStore } from "@reduxjs/toolkit";
import { isDevelopment } from "constants/common.constant";
import cartSelectedReducer from "./reducers/cartSelected.reducer";
import transactionReducer from "./reducers/transaction.reducer";

export default configureStore({
  reducer: {
    cartSelected: cartSelectedReducer,
    transaction: transactionReducer,
  },
  devTools: isDevelopment || Boolean(localStorage.getItem("redux-debug")),
});
