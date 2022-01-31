import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginActions } from '../../store/login-slice';
import classes from './LoginForm.module.css';

const LoginForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const usernameInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    dispatch(loginActions.login({ username: enteredUsername }));
    history.push('/');
  }

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' required ref={usernameInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>);
};

export default LoginForm;
