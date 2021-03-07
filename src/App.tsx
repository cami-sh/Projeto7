import React from 'react';
import './App.css';
import Header from './Components/Header'
import Inicio from './Components/Inicio'
import QuemSomos from './Components/QuemSomos'
import Features from './Components/Features'

function App() {

  return (
    <div className='App'>
      <Header />
      <Inicio />
      <QuemSomos />
      <Features />
    </div>
  );
}

export default App;