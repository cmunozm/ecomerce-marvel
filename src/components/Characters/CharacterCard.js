import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { charactersActions } from '../../store/characters-slice';
import Card from '../ui/Card';
import classes from './CharacterCard.module.css';

const CharacterCard = (props) => {

  const { id, name, image, description, inCart } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, image, description, inCart: true }));
    dispatch(charactersActions.charactersInCart({ id, inCart: true }))
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
    dispatch(charactersActions.charactersInCart({ id, inCart: false }))
  }

  return (
    <Card>
      <div className={classes.overlay}>
        {!inCart && <button onClick={addToCartHandler}>Add to Cart</button>}
        {inCart && <button onClick={removeFromCartHandler} className={classes.btnRemove}>Remove from Cart</button>}
      </div>
      {inCart && <span className={classes.added}>Added to Cart</span>}
      <div className={classes.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.footer}>
        <span>{name}</span>
      </div>
    </Card>);
};

export default CharacterCard;
