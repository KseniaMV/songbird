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

     //получение текущей  категории вопросов
     getQuestionCategoryName = () =>{
         let questionCategoryName = this.state.category;
         return questionCategoryName;    
     }
     getQuestionCategoryCount = () =>{
         let questionCategoryCount = this.state.count;
         return questionCategoryCount;
     }   

     setQuestionCategory =(categoryCount)=>{
        switch(categoryCount) {
            case 1: 
            this.setState({category: "Воробьиные"});
            break
            case 2: 
            this.setState({category: "Лесные"});
            break
            case 3: 
            this.setState({category: "Певчие птицы"});
            break 
            case 4: 
            this.setState({category: "Хищные птицы"});
            break 
            case 5: 
            this.setState({category: "Морские птицы"});
            break
            default: 
            this.setState({category: "Разминка"});
        }
        console.log("Текущая категория " + this.state.category);
       
     }

     //случайная птица из текущей категории для вопроса
     getCurrentBird = ()=>{
         let randomCount = Math.floor(Math.random() * 6);
         let category = this.getQuestionCategoryName();
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


    toNextCategory = ()=>{
        let categoryCount = this.state.count;
        categoryCount ++;
        this.setQuestionCategory(categoryCount);
            this.setState(() => {
              return {count:categoryCount}
            });    
    }

    render(){
        return (
                <div className="app">
                 <Header />
                 <Menu currentCategory={()=>this.state.count}/>
                 <Questions currentBird={this.getCurrentBird()} isRightAnswer={this.state.isRightAnswer}/>
                 <Answers/>
                 <NextButton toNextCategory={this.toNextCategory}/>
                </div>
        )
    }
}
export default Game;