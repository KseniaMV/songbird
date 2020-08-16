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
            count: 0,
            answer: "",
            currentBird: "",
            score: 0,
            bird: {},
            answerList: [],
            clickCount: 0
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
        return new Promise((resolve, reject)=>{      
            let selectedValue = value.target.value;
            let click = this.state.clickCount;
            this.setState(()=>{
                return({
                    answer: selectedValue,
                    clickCount: click + 1
                })
            });
            resolve(selectedValue);

            }).then(()=>this.checkAnswer());
    }

    //функция сравнения ответа с вопросом
    checkAnswer = ()=>{
        let answer = this.state.answer;
        let prevScore = this.state.score;
        let currentBird = this.state.currentBird;
        console.log(answer + " / " + currentBird);
        if(answer === currentBird){
            this.scoreCount(prevScore);
            this.setState(()=>{
                return({isRightAnswer: true})
            })   
        }


    }

    //подсчет очков
    scoreCount = (prevScore)=>{
        let answerCount = 6;
        let clickCount = this.state.clickCount;
        let finalScore = answerCount - clickCount;
        this.setState(()=>{
            return ({score: prevScore + finalScore})
        })
    }

    //получить количество очков
    getScore = ()=>{
        let score = this.state.score;
        return score;
    }

    //получить данные о текущей категории 
    getCategoryData=()=>{
       let categoryData = {
           name: this.state.category,
           title: Object.keys(dataBirds)
       }
       console.log(categoryData); 
       return categoryData;
    }

    render(){

        return (
                <div className="app">
                 <Header score ={this.getScore}/>
                 <Menu categoryData={this.getCategoryData}/>
                 <Questions createQuestion={this.state.bird} getCurrentBird={this.getCurrentBird} isRightAnswer={this.state.isRightAnswer}/>
                 <Answers getAnswersList={this.state.answerList} handleClick={this.handleClick} isRightAnswer={this.state.isRightAnswer}/>
                 <NextButton/>
                </div>
        )
    }
}
export default Game;