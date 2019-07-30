import React from 'react';
import { Route, Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
import Settings from './scenes/Settings/Settings';
import Game from './scenes/Game/Game';
import Profile from './scenes/Profile/Profile';

import './App.scss';
import './index.scss';

function App(props) {
  
  // const token = localStorage.getItem("token"); 

  return (
    <div className="App">
      {/* Guess Who */}
      <div className="tempLinks">
        <Link to="/">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/settings">settings</Link>
        <Link to="/game">game</Link>
        {/* {/* <button onClick={logout}>logout</button> */}
      </div>

      {/* {token 
        ? <button onClick={logout}>Logout</button>
        : null
      } */}

      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
      {/* <Route path="/signup" component={Signup} /> */}
      <Route path="/signup" component={Signup} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/game" component={Game} />
    </div>
  );
}

export default App;
