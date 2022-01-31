import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import CharactersPage from './pages/CharactersPage';
import CartDetailsPage from './pages/CartDetailsPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/ui/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from './store/login-slice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const isLogedIn = useSelector(state => state.login.isLogedIng);


  useEffect(() => {
    dispatch(loginActions.reloadPage({ username: localStorage.getItem('username') }));
  }, [dispatch]);


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
              <LoginPage />
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
