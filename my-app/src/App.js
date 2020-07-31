import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js';
import Questions from './components/Questions/Questions.js';

function App() {
  return (
    <div className="app">
     <Header />
     <Menu />
     <Questions/>
    </div>
  );
}

export default App;
