import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice';
import charactersReducer from "./characters-slice";
import loginReducer from "./login-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    characters: charactersReducer
  }
});

export default store;