import React from 'react';
import './App.css';
import Game from './components/Game/Game.js';
import GameResults from './components/GameResults/GameResults.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isGameOver: false,
      score: 0
    }
  }
  checkGameState = (value, score)=>{
    console.log("iam here");
    if(value === true){
      this.setState(()=>{
        return({
          isGameOver: true,
          score: score
        })
      })
    }
  }

  render(){
    return (
      <div className="app">{this.state.isGameOver === true? <GameResults score={this.state.score}/>:<Game checkGameState={this.checkGameState}/>}</div>
    );
  }
}

export default App;
