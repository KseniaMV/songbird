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
    greeting = ()=>{
        console.log("greeting");
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
            button = <button className="startGameAgain" onClick={this.props.startGameAgain}>Играть заного</button>
        }
        return(
            <>
            <div className="resultsConteiner">
                <h1 className="greeting">{this.state.victory===true? 'Поздравляем!': null}</h1>
                <div className="results">{this.state.victory===true?'Вы набрали максимальное количество баллов! ' + this.props.score: 'Ваши баллы: ' +  this.props.score + ' из 30'}</div>
                {button}
            </div>
            </>
        )
    }

}
export default GameResults;