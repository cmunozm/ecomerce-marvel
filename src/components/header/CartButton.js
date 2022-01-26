import classes from './CartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CartButton = () => {

  const itemsQuantity = useSelector(state => state.cart.totalItems);


  const btnClases = `${classes.button} ${classes.bump}`;

  return <button className={btnClases}>
    <span className={classes.icon}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{itemsQuantity}</span>
  </button>;
};

export default CartButton;
