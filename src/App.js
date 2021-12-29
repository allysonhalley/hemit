import React from 'react'
import './App.css';

import Header from './components/Header/Header'
import Hello from './components/Hello/Hello'
import Portfolio from './components/Portifolio/Portfolio'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Portfolio />
    </div>
  );
}

export default App;
