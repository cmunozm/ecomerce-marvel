import { useDispatch, useSelector } from 'react-redux';
import classes from './Characters.module.css';
import CharacterCard from './CharacterCard';
import Spinner from '../ui/Spinner';
import { useEffect, useState } from 'react';
import { fetchCharacterData } from '../../store/character-actions';

const Characters = () => {

  const dispatch = useDispatch();
  const charactersList = useSelector(state => state.characters.charactersList);
  const [isLoading, setIsLoading] = useState(!!charactersList);


  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCharacterData());
    setIsLoading(false);
  }, [dispatch])

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
