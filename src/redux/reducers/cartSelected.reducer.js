import { createSlice } from "@reduxjs/toolkit";

export const cartSelectedSlice = createSlice({
  name: "cartSelected",
  initialState: {
    total: 0,
    qty: 0,
    items: [],
  },
  reducers: {
    selectCart: (state, action) => {
      const { items } = action.payload;
      state.total = items
        .map((item) => item.price * item.qty)
        .reduce((total, value) => total + value);
      state.qty = items
        .map((item) => item.qty)
        .reduce((total, value) => total + value);
      state.items = items;
    },
    clearCart: (state) => {
      state.total = 0;
      state.qty = 0;
      state.items = [];
    },
  },
});

export const { selectCart, clearCart } = cartSelectedSlice.actions;

export default cartSelectedSlice.reducer;
