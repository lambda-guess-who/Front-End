import React from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
=======
import { Route, Link } from 'react-router-dom';
>>>>>>> 816d780dc9822f787dfff17d38851c749eef1e3f
import { PrivateRoute } from './PrivateRoute';
import Dashboard from './scenes/Dashboard/Dashboard';


import Login from './scenes/Login/Login';
import Signup from './scenes/Login/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
import Settings from './scenes/Settings/Settings';
import Game from './scenes/Game/Game';

import './App.scss';
import './index.scss';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Dashboard />
=======
      Guess Who
      <div className="tempLinks">
        <Link to="/">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/settings">settings</Link>
        <Link to="/game">game</Link>
      </div>
      <Route exact path="/" component={Login} />
      {/* <Route path="/signup" component={Signup} /> */}
      <Route path="/signup" component={Signup} />

      <Route path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/settings" component={Settings} />
      {/* <PrivateRoute path="/settings" component={Settings} /> */}
      <Route path="/game" component={Game} />
      {/* <PrivateRoute path="/game" component={Game} /> */}
>>>>>>> 816d780dc9822f787dfff17d38851c749eef1e3f
    </div>
  );
}

export default App;
