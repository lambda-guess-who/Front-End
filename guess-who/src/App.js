import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from './scenes/Login/Login';

import './App.scss';

function App() {
  return (
    <div className="App">
      Guess Who
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
