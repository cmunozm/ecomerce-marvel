import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice';
import loginReducer from "./login-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer
  }
});

export default store;