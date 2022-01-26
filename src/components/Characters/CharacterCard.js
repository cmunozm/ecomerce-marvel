import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../ui/Card';
import classes from './CharacterCard.module.css';

const CharacterCard = (props) => {

  const { id, name, image } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, image, inCart: true }));
  };

  return (
    <Card>
      <div className={classes.overlay}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
      <div className={classes.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.footer}>
        <span>{name}</span>
      </div>
    </Card>);
};

export default CharacterCard;
