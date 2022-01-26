import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogedIng: false
  },
  reducers: {

    login(state, action) {
      state.isLogedIng = true;
    },
    logout(state, action) {
      state.isLogedIng = false;
    }
  }
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;