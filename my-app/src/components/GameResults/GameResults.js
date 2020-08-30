import React from 'react';
import './GameResults.css';




class GameResults extends React.Component{
    constructor(props){
        super(props);
        this.state={
            victory: false   
        }
    };
    componentDidMount(){
        let score = this.props.score;
        if(score === 30){
            this.setState(()=>{
                return({
                    victory: true
                })
            })
        };

    }
  
    render(){
        let button;
        if(this.state.victory === true){
            button = <button className="victoryButton" onClick={this.props.startGameAgain}>Ура!</button>
        }else{
            button = <button className="startGameAgain" onClick={this.props.startGameAgain}>Играть заново</button>
        };
        return(
            <>
            <div className="resultsConteiner">
                <h1 className="greeting">{this.state.victory===true? 'Поздравляем!': null}</h1>
                
                <div className="results">{this.state.victory===true?'Вы набрали максимальное количество баллов! ' + this.props.score: 'Ваши баллы: ' +  this.props.score + ' из 30'}</div>
                <p className="greeting_text">{this.state.victory=== true? 'Теперь птички - Ваши друзья!':null}</p>
                {button}
            </div>
            </>
        )
    }

}
export default GameResults;