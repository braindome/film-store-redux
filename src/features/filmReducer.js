import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("add to cart");
const removeFromCart = createAction("remove from cart");

const actions = { addToCart, removeFromCart };

const initialState = {
  cart: [],
};

const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      state.cart.push(action.payload);
    })
    .addCase(removeFromCart, (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    });
});

export { filmReducer, actions };
