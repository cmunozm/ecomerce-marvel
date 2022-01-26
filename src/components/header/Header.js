import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Header.module.css';
import imgBanner from '../../assests/banner.jpg';
import Logo from '../../assests/logo.png';
import CartButton from './CartButton';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/login-slice';
import { useHistory } from 'react-router-dom';

const Header = () => {

  const isLogedIn = useSelector(state => state.login.isLogedIng);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    if (isLogedIn) {
      dispatch(loginActions.logout());
      history.push('/login-form');
    }
  };

  return <>
    <header className={classes.header}>
      <Link to='/' className={classes.logo}>
        <img src={Logo} alt='Logo Marvel' />
      </Link>
      <ul className={classes.actions}>
        {isLogedIn && <li>
          <Link to='/cart-details'>
            <CartButton />
          </Link>
        </li>}
        {isLogedIn && <li>
          <span className={classes.login} onClick={logoutHandler}>{!isLogedIn ? 'Login' : 'Logout'}</span>
        </li>}
      </ul>
    </header>
    <span className={classes.border}></span>
    <div className={classes.banner}>
      <img src={imgBanner} alt='Banner Marvel' />
    </div>
  </>;
};

export default Header;
