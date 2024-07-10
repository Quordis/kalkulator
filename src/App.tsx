import React, { useState } from 'react';
import './App.css';
import Kalkulator from './components/kalkulator';

function App() {
  return (
    <div className="App">
      <nav><h1>Kalkulator2000</h1></nav>
      <div className='Display'></div>
      <Kalkulator />
    </div>
  );
}

export default App;
