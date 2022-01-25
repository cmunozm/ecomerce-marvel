import classes from './Header.module.css';
import imgBanner from '../../assests/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return <>
    <header className={classes.header}>
      <div>
        <h1 className={classes.logo}>Marvel</h1>
      </div>
      <nav>
        <button className={classes.car}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </nav>
    </header>
    <div className={classes.banner}>
      <img src={imgBanner} alt='Banner Marvel' />
    </div>
  </>;
};

export default Header;
