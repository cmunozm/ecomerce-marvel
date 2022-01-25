import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import imgBanner from '../../assests/banner.jpg';
import Logo from '../../assests/logo.png';
import CartButton from './CartButton';

const Header = () => {
  return <>
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        <img src={Logo} alt='Logo Marvel' />
      </Link>
      <ul className={classes.actions}>
        <li>
          <Link to='/cart-details'>
            <CartButton />
          </Link>
        </li>
        <li>
          <Link to='/login-form' className={classes.login}>Login</Link>
        </li>
      </ul>
    </header>
    <span className={classes.border}></span>
    <div className={classes.banner}>
      <img src={imgBanner} alt='Banner Marvel' />
    </div>
  </>;
};

export default Header;
