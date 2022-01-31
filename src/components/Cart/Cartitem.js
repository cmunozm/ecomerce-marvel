import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { charactersActions } from '../../store/characters-slice';
import classes from './CartItem.module.css';

const Cartitem = (props) => {

  const { id, name, image, description } = props;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
    dispatch(charactersActions.removeCharacterFromCart({ id, inCart: false }));
  }

  return <div className={classes.cartItem}>
    <div className={classes.imageContainer}>
      <img src={image} alt={name}></img>
    </div>
    <div className={classes.description}>
      <span>{name}</span>
      <p>{description ? description : 'No description available.'}</p>
    </div>
    <button onClick={removeItemHandler} className={classes.button}>Remove</button>
  </div>;
};

export default Cartitem;
