import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
