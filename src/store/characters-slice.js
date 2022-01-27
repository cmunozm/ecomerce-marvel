import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    charactersList: [],
  },
  reducers: {
    loadCharacters(state, action) {
      state.charactersList = [...action.payload];
    },

    charactersInCart(state, action) {
      const character = state.charactersList.find(item => item.id === action.payload.id);
      state.charactersList.forEach((item, index) => {
        if (item.id === character.id) {
          state.charactersList[index].inCart = action.payload.inCart;
        }
      })
    }
  }
});

export const charactersActions = charactersSlice.actions;
export default charactersSlice.reducer;
