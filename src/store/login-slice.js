import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogedIng: false,
    username: ''
  },
  reducers: {

    reloadPage(state, action) {
      const username = action.payload.username;
      state.isLogedIng = !!username;
      state.username = username;
    },

    login(state, action) {
      state.isLogedIng = true;
      state.username = action.payload.username;
      localStorage.setItem('username', action.payload.username);
    },

    logout(state, action) {
      state.isLogedIng = false;
      state.username = '';
      localStorage.removeItem('username');
      localStorage.removeItem('cart');
    }
  }
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;