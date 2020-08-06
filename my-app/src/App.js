import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Menu from './components/Menu/Menu.js';
import Questions from './components/Questions/Questions.js';
import Answers from './components/Answers/Answers.js';
function App() {
  return (
    <div className="app">
     <Header />
     <Menu />
     <Questions/>
     <Answers/>
    </div>
  );
}

export default App;
