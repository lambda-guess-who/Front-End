import React from 'react';
import { Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import './App.scss';
import Categories from './components/Categories'

function App() {
  return (
    <div className="App">
      <Categories />
    </div>
  );
}

export default App;
