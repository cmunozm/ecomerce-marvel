import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Characters.module.css';
import CharacterCard from './CharacterCard';
import Spinner from '../ui/Spinner';
import { charactersActions } from '../../store/characters-slice';


const Characters = () => {

  const dispatch = useDispatch();
  const charactersList = useSelector(state => state.characters.charactersList);
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=25d7f181195da5d8bfab34778c4c6a3c&hash=15c38f86f7421d2f4cca8f829417d49b');

    if (!response.ok) {
      throw new Error('Error fetching the characters!');
    }

    const responseData = await response.json();
    console.log(responseData);
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

    dispatch(charactersActions.loadCharacters(LoadedCharacters));
    setIsLoading(false)

  };

  useEffect(() => {
    if (charactersList.length === 0) {
      fetchData()
        .catch((error) => {
          alert(error.message)
        });
    }
  }, []);

  return (
    <>
      {isLoading &&
        <div className='centered'>
          <Spinner />
        </div>
      }
      {!isLoading && <div className={classes.characters}>
        {charactersList.map((item) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            inCart={item.inCart}
          />
        ))}
      </div>}
    </>);
};

export default Characters;
