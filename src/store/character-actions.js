import { cartActions } from "./cart-slice";
import { charactersActions } from "./characters-slice";

export const fetchCharacterData = () => {

  return async (dispatch) => {

    const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=25d7f181195da5d8bfab34778c4c6a3c&hash=15c38f86f7421d2f4cca8f829417d49b');

    if (!response.ok) {
      throw new Error('Error fetching the characters!');
    }

    const responseData = await response.json();
    const LoadedCharacters = [];

    for (const character in responseData.data.results) {
      LoadedCharacters.push({
        id: responseData.data.results[character].id,
        name: responseData.data.results[character].name,
        description: responseData.data.results[character].description,
        image: `${responseData.data.results[character].thumbnail.path}.${responseData.data.results[character].thumbnail.extension}`,
        inCart: false
      });
    }

    const addedToCart = JSON.parse(localStorage.getItem('cart'));
    dispatch(charactersActions.loadCharactersInCart(addedToCart));
    dispatch(charactersActions.loadCharacters(LoadedCharacters));
    dispatch(cartActions.reloadItems(LoadedCharacters.filter(item => item.inCart === true)));

  };

};

export const resetCharacterData = () => {
  return (dispatch) => {
    dispatch(charactersActions.loadCharactersInCart([]));
    dispatch(charactersActions.loadCharacters([]));
    dispatch(cartActions.reloadItems([]));
    localStorage.removeItem('cart');
  };
};