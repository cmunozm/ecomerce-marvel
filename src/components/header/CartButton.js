import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartButton = () => {

  const itemsQuantity = useSelector(state => state.cart.totalItems);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);


  useEffect(() => {
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    };

  }, [itemsQuantity])

  const btnClases = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return <button className={btnClases}>
    <span className={classes.icon}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{itemsQuantity}</span>
  </button>;
};

export default CartButton;
