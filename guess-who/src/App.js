import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Game from './scenes/Game/Game.js';

import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
import Settings from './scenes/Settings/Settings';
import Game from './scenes/Game/Game';

import './App.scss';

function App() {
  return (
    <div className="App">
      Guess Who
<<<<<<< HEAD
      <Game />
=======
      <Link to="/">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/dashboard">dashboard</Link>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/game" component={Game} />

>>>>>>> 7e5af744df896f40b32f2462273b6367ca0b37b2
    </div>
  );
}

export default App;
