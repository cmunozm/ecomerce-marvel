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

  const isLogedIn = useSelector(state => state.login.username);
  const username = isLogedIn;
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
      {isLogedIn &&
        <ul className={classes.actions}>
          <li>
            <span>Welcome {username}</span>
          </li>
          <li>
            <Link to='/cart-details'>
              <CartButton />
            </Link>
          </li>
          <li>
            <span className={classes.login} onClick={logoutHandler}>Logout</span>
          </li>
        </ul>
      }
    </header>
    <span className={classes.border}></span>
    <div className={classes.banner}>
      <img src={imgBanner} alt='Banner Marvel' />
    </div>
  </>;
};

export default Header;
