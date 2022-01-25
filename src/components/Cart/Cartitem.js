import classes from './CartItem.module.css';

const Cartitem = () => {
  return <div className={classes.cartItem}>
    <div className={classes.imageContainer}>
      <img src="http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787.jpg" alt="100th Anniversary Special (2014)"></img>
    </div>
    <span>100th Anniversary Special (2014)</span>
    <button>Remove</button>
  </div>;
};

export default Cartitem;
