import { createSlice } from "@reduxjs/toolkit";

export const cSlicer = createSlice({
  name: "children",
  initialState: {
    nano: 0,
    productz: [],
  },
  reducers: {
    decreament: (state,action) => {
      const existingProductIndex = state.productz.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        state.productz[existingProductIndex].qty -= 1;
      } else {
        state.productz
      }
    },
    increament: (state, action) => {
      const existingProductIndex = state.productz.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        state.productz[existingProductIndex].qty += 1;
      } else {
        state.productz.push({ product: action.payload, qty: 1 });
      }
    },
  },
});
