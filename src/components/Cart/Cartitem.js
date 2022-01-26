import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const Cartitem = (props) => {

  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  }

  return <div className={classes.cartItem}>
    <div className={classes.imageContainer}>
      <img src={props.image} alt={props.name}></img>
    </div>
    <span>{props.name}</span>
    <button onClick={removeItemHandler} className={classes.button}>Remove</button>
  </div>;
};

export default Cartitem;
