import React from 'react';
import './App.css';
import Header from './Header'
import Menu from './Menu';

function App() {
  return (
    <div className="App">
     <Header />
     <Menu />
     <Questions/>
     <Answers/>
     <Description/>
     <Next/>
    </div>
  );
}

export default App;
