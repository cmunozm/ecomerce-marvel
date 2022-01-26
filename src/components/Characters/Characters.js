import { useEffect, useState } from 'react';
import classes from './Characters.module.css';
import CharacterCard from './CharacterCard';


const Characters = () => {

  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=25d7f181195da5d8bfab34778c4c6a3c&hash=15c38f86f7421d2f4cca8f829417d49b');

      if (!response.ok) {
        throw new Error('Error fetching the characters!');
      }

      const responseData = await response.json();
      const LoadedCharacters = [];

      for (const character in responseData.data.results) {
        LoadedCharacters.push({
          id: responseData.data.results[character].id,
          name: responseData.data.results[character].title,
          description: responseData.data.results[character].description,
          image: `${responseData.data.results[character].thumbnail.path}.${responseData.data.results[character].thumbnail.extension}`
        });
      }

      setCharactersList(LoadedCharacters);

    };

    fetchData()
      .catch((error) => {
        alert(error.message)
      });

  }, []);

  return (
    <>
      <div className={classes.characters}>
        {charactersList.map((item) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </>);
};

export default Characters;
