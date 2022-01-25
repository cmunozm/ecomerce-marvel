import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import CharactersPage from './pages/CharactersPage';
import CartDetailsPage from './pages/CartDetailsPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/ui/Layout';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <CharactersPage />
          </Route>
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
