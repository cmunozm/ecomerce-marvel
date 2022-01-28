import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
import Cartitem from './Cartitem';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <section>
      {cartItems.map(item => (
        <Cartitem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
      <div className={classes.actions}>
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
    </section>
  );
};

export default Cart;
