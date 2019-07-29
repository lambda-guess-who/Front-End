import React from 'react';
import { Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import Game from './scenes/Game/Game.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      Guess Who
      <Game />
    </div>
  );
}

export default App;
