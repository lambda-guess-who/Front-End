import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
import Settings from './scenes/Settings/Settings';
import Game from './scenes/Game/Game';
import TryAgain from './scenes/Game/TryAgain';
import Profile from './scenes/Profile/Profile';

import './App.scss';
import './index.scss';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/game" component={Game} />
      <PrivateRoute path="/tryagain" component={TryAgain} />
    </div>
  );
}

export default App;
