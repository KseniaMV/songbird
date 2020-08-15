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
            isRightAnswer: true,
            category: "Разминка",
            count: 0,
            answer: "",
            currentBird: "",
            score: 0,
            bird: {},
            answerList: []
        }
     }

     componentDidMount(){
         this.createQuestion();
         this.getAnswersList();
     }

     //создание полей для компонента Question
     createQuestion = ()=>{
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
        this.setState({
            currentBird: currentBird.name,
            bird: currentBirdData
        })
        return currentBirdData;
    };
    
    //получение правильного ответа на вопрос
    getCurrentBird(value){
        let currentBird = value;
        return currentBird
    
    };

    //получение названий птиц для списка ответов в компоненте Answers
    getAnswersList() {
        let category = this.state.category;
        let answersList = dataBirds[category].map((value,index)=>{
            return value.name
        });
        this.setState({
            answerList: answersList
        })
        return answersList;
    }
  
    //обработка события click по варианту ответа
    handleClick = (value)=>{
        let answer = value.target.value;
        this.setState(()=>{
            return({
                answer: answer
            })
        });
        this.checkAnswer();
    }

    //функция сравнения ответа с вопросом
    checkAnswer(){
        let answer = this.state.answer;
        let currentBird = this.state.currentBird;
        if(answer === currentBird){
            this.setState(()=>{
                return(
                    {score: this.score + 1}
                )

            })
      
            
        }
        console.log(answer + "/" + currentBird);
    }



    
    render(){

        return (
                <div className="app">
                 <Header score ={this.state.score}/>
                 <Menu/>
                 <Questions createQuestion={this.state.bird} getCurrentBird={this.getCurrentBird} isRightAnswer={this.state.isRightAnswer}/>
                 <Answers getAnswersList={this.state.answerList} handleClick={this.handleClick}/>
                 <NextButton/>
                </div>
        )
    }
}
export default Game;