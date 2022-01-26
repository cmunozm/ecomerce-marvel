import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import CharactersPage from './pages/CharactersPage';
import CartDetailsPage from './pages/CartDetailsPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/ui/Layout';
import { useSelector } from 'react-redux';

function App() {

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
          <Route path='/cart-details'>
            <CartDetailsPage />
          </Route>
          <Route path='/login-form'>
            <LoginPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
