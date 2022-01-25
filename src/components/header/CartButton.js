import classes from './CartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartButton = () => {
  return <button className={classes.button}>
    <span className={classes.icon}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>5</span>
  </button>;
};

export default CartButton;
