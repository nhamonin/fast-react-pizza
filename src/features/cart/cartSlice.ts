import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../../types";
import { RootState } from "../../store";
import { Route } from "react-router-dom";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.totalPrice, 0);

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const getCart = (state: RootState) => state.cart.items;

export const getCurrentQuantityById = (id: number) => (state: RootState) => {
  return state.cart.items.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
