import classes from './Cart.module.css';
import Cartitem from './Cartitem';

const Cart = () => {
  return (
    <section className={classes.cart}>
      <Cartitem />
      <div className={classes.actions}>
        <span>Total Items:</span>
        <span>10</span>
      </div>
    </section>
  );
};

export default Cart;
