import React from 'react';
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js';
import Questions from '../Questions/Questions.js';
import Answers from '../Answers/Answers.js';
import birdsData from '../../birdsData.json';
import NextButton from '../NextButton/NextButton.js';

const dataBirds = birdsData;
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isRightAnswer: false,
            category: "Разминка",
            count: 0
        }
     }

     getCurrentBird = ()=>{
        let randomCount = Math.floor(Math.random() * 6);
        let category = this.state.category;
        let currentBird = dataBirds[category][randomCount];
        let currentBirdData = {
            name: currentBird.name,
            audio: currentBird.audio,
            species: currentBird.species,
            image: currentBird.image,
            description: currentBird.description
        }
        return currentBirdData;
    }

    getAnswersList() {
        let category = this.state.category;
        let answersList = dataBirds[category].map((value,index)=>{
            return value.name
        }
        );
        console.log(answersList);
        return answersList;
    }
  
    
    render(){
        const {isRightAnswer, category, count} = this.state;
        return (
                <div className="app">
                 <Header/>
                 <Menu/>
                 <Questions currentBird={this.getCurrentBird()} isRightAnswer={isRightAnswer}/>
                 <Answers answersList={this.getAnswersList()} category={this.state.category}/>
                 <NextButton/>
                </div>
        )
    }
}
export default Game;