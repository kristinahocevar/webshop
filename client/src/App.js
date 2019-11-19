import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleItem from './pages/SingleItem';
import Basket from './pages/Basket';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container textAlign='justified'>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/items/:itemId" component={SingleItem} />
          <Route exact path="/basket" component={Basket} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
