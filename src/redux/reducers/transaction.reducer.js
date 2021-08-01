import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "setTransaction",
  initialState: {
    transactionCode: 0,
    transactionId: 0,
    transactionDate: "",
    qty: 0,
    saldo: 0,
    total: 0,
    userId: 0,
    items: [],
  },
  reducers: {
    setTransaction: (state, action) => {
      const {
        items,
        qty,
        saldo,
        transactionCode,
        transactionId,
        transactionDate,
        total,
        userId,
      } = action.payload;
      state.transactionCode = transactionCode;
      state.transactionId = transactionId;
      state.transactionDate = transactionDate;
      state.qty = qty;
      state.saldo = saldo;
      state.total = total;
      state.userId = userId;
      state.items = items;
    },
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
