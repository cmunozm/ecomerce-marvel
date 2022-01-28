import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import CharactersPage from './pages/CharactersPage';
import CartDetailsPage from './pages/CartDetailsPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/ui/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from './store/login-slice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loginActions.reloadPage({ username: localStorage.getItem('username') }));
    history.push('/');
  }, []);
  const isLogedIn = useSelector(state => state.login.isLogedIng);

  return (
    <>
      <Header />
      <Layout>
        <Switch>
          {isLogedIn &&
            <Route path='/' exact>
              <CharactersPage />
            </Route>
          }
          {!isLogedIn &&
            <Route path='/' exact>
              <Redirect to='/login-form' />
            </Route>
          }
          {isLogedIn &&
            <Route path='/cart-details'>
              <CartDetailsPage />
            </Route>
          }
          {!isLogedIn &&
            <Route path='/login-form'>
              <LoginPage />
            </Route>
          }
        </Switch>
      </Layout>
    </>
  );
}

export default App;
