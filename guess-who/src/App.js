import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
import Settings from './scenes/Settings/Settings';
import Game from './scenes/Game/Game';
import Profile from './scenes/Profile/Profile';

import './App.scss';
import './index.scss';

function App() {

  return (
      <Router className="App">
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
        >
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/game" component={Game} />
          <PrivateRoute path="/tryagain" component={Game} />
        </AnimatedSwitch>
      </Router>
  );
}

export default App;
