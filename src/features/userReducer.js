import { createAction, createReducer } from "@reduxjs/toolkit";

const loginEmail = createAction("email login");
const loginPassword = createAction("password login");
const logout = createAction("log out");

const actions = { loginEmail, loginPassword, logout };

const initialState = {
  email: "",
  password: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(loginPassword, (state, action) => {
      state.password = action.payload;
    })
    .addCase(logout, (state, action) => {
        return initialState;
    });
});

export { actions, userReducer };
