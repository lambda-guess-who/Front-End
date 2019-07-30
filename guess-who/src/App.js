import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';

import './App.scss';

function App() {
  return (
    <div className="App">
      Guess Who
      <Link to="/">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">dashboard</Link>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
    </div>
  );
}

export default App;
