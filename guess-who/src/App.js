import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';
import Dashboard from './scenes/Dashboard/Dashboard';

import './App.scss';

function App() {
  return (
    <div className="App">
      Guess Who
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
