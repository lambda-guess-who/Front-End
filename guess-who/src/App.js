import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from './scenes/Dashboard/Dashboard';


import './App.scss';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
