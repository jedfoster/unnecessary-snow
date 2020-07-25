import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Draft } from './features/draft/Draft';
import { Recipes } from './features/recipes/Recipes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Draft />
      <Recipes />
    </div>
  );
}

export default App;
