import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0
  },
  reducers: {

    reloadItems(state, action) {
      state.items = [...action.payload];
      state.totalItems = state.items.length;
    },

    addItemToCart(state, action) {
      state.items.push(action.payload);
      state.totalItems++;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.totalItems--;
    }

  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;