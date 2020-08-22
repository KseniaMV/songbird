import React from 'react';
import './GameResults.css';
import Header from '../Header/Header.js';



class GameResults extends React.Component{
    constructor(props){
        super(props);
        this.state={
            victory: false
            
        }
    }
    render(){
        let score = this.props.score;
        if(score === 30){
            this.setState(()=>{
                return({
                    victory: true
                })
            })
        };
        let button;
        if(this.state.victory === true){
            button = <button className="victoryButton" onClick={this.greeting()}>Ура!</button>
        }else{
            button = <button className="startGameAgain" onclick={this.startGameAgain()}>Играть заного</button>
        }
        return(
            <>
            <Header/>
            <div className="resultsConteiner">
                <h1 className="greeting">{this.state.victory===true? 'Поздравляем!': null}</h1>
                <div className="results">{this.state.victory===true?'Вы набрали максимальное количество баллов! ' + this.props.score: 'Вы набрали' +  this.props.score + 'баллов из 30'}</div>
                {button}
            </div>
            </>
        )
    }

}
export default GameResults;