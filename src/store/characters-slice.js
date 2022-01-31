import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    charactersList: [],
    addedToCart: []
  },
  reducers: {

    loadCharactersInCart(state, action) {
      if (action.payload) {
        state.addedToCart = [...action.payload];
      }
      else {
        state.addedToCart = [];
      }
    },

    loadCharacters(state, action) {
      state.charactersList = [...action.payload];
      state.charactersList.forEach(item => {
        if (state.addedToCart?.includes(item.id)) {
          item.inCart = true;
        }
      });
    },

    charactersInCart(state, action) {
      const { id } = state.charactersList.find(item => item.id === action.payload.id);
      state.addedToCart.push(id);

      state.charactersList.forEach((item, index) => {
        if (item.id === id) {
          state.charactersList[index].inCart = action.payload.inCart;
          localStorage.setItem('cart', JSON.stringify([...state.addedToCart]));
          return;
        }
      })
    }
  }
});

export const charactersActions = charactersSlice.actions;
export default charactersSlice.reducer;
