import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './camponent/Home';
import Product from './camponent/Product';
import Cart from './camponent/Cart';
import LogIn from './camponent/LogIn';
import SignUp from './camponent/SignUp';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/cart' component={Cart} />
        <Route path='/logIn' component={LogIn} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      
    </Router>
  );
}

export default App;
