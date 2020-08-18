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
            id:'',
            score: 0,
            bird: {},
            answerList: [],
            clickCount: 0
        }
     }

     componentDidMount(){
         this.createQuestion();    //создание вороса
         this.getAnswersList();   //создание списка ответов для пользователя
     }

     //создание полей для компонента Question
     createQuestion = ()=>{
        let randomCount = Math.floor(Math.random() * 6);       //случайное число от 0 - 6
        let category = this.state.category;                    //текущая категория вопроса
        let currentBird = dataBirds[category][randomCount];    //название птицы спрятанное в вопросе
        let currentBirdData = {                                //данные выбранной птицы
            name: currentBird.name,
            audio: currentBird.audio,
            species: currentBird.species,
            image: currentBird.image,
            description: currentBird.description
        }
        this.setState({                                     //запись в state загаданной птицы и ее данных
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
        let category = this.state.category;                         //получение текущей категории вопросов
        let answersList = dataBirds[category].map((value,index)=>{  //формирование списка названий птиц из текущей категории вопросов
            return value.name
        });
        this.setState({
            answerList: answersList                                 //запись списка в state
        })
        return answersList;
    };
  
    //обработка события click по варианту ответа
    handleClick = (value)=>{
        return new Promise((resolve, reject)=>{      
            let selectedValue = value.target.value;     //значение input которое выбрал пользователь
            let id = value.target.id;                   //id выбранного input
            let click = this.state.clickCount;          //текущее значение количества кликов пользователя
            this.setState(()=>{
                return({
                    answer: selectedValue,              //выбранное значение запивывается в state  как овтет пользователя
                    clickCount: click + 1,              //количество кликов пользователя увеличивается на 1
                    id: id
                })
            });
            resolve(selectedValue);
            }).then(()=>this.checkAnswer());
    };

    //функция сравнения ответа с вопросом
    checkAnswer = ()=>{
        let answer = this.state.answer;             //получение навзания птицы, который выбрал пользователь
        let prevScore = this.state.score;           //получение количества очков пользователя
        let currentBird = this.state.currentBird;   //название птицы, которую "загадала" игра 
        if(answer === currentBird){                 //сравнение варианта ответа и загаданной птицы
            this.scoreCount(prevScore);             //если названия равны, то вызывается функция подсчета очков, куда передается текущее количество очков пользователя
            this.setState((state)=>{
                return({
                    isRightAnswer: true,            //флаг = ответ правильный
                    count: state.count + 1
                })      
            }); 
        };

    };

    //подсчет очков
    scoreCount = (prevScore)=>{
        let answerCount = 6;                        //максимальное количество попыток  
        let clickCount = this.state.clickCount;     //количество попыток (сlick по вариантам ответов)
        let finalScore = answerCount - clickCount;  //подсчет очков в зависимости от количества уже использованных попыток 6 = 0
        if(answerCount === 0){                      
            finalScore = 0;
        }  
        this.setState(()=>{
            return ({score: prevScore + finalScore}) //запись в state полученных за правильный ответ очков
        })
    };

    //получить количество очков
    getScore = ()=>{
        let score = this.state.score;
        return score;
    };

    //получить данные о текущей категории 
    getCategoryData=()=>{
       let categoryData = {
           name: this.state.category,           //информация о названии категории вопросов и массив со всеми наваниями категорий
           title: Object.keys(dataBirds)
       } 
       return categoryData;
    };

    //создание описания птицы
    createDescription=()=>{                         
        let id = this.state.id;                     //получение названия выбранной пользователем птицы
        let category = this.state.category;         //получение категории вопросов
        let bird = dataBirds[category][id];         //доступ к данным птицы в выбранной категории
        return bird;
    };

     //функция устанавливает категорию вопросов
    setQuestionCategory =(categoryCount)=>{    
        switch(categoryCount) {
            case 1: 
            this.setState(()=>{
                return(
                    {category: "Воробьиные"}
                )
            })
            break
            case 2: 
            this.setState(()=>{
                return(
                    {category: "Лесные"}
                )
            })
            break
            case 3: 
            this.setState(()=>{
                return(
                    {category: "Певчие птицы"}
                )
            })
            break 
            case 4: 
            this.setState(()=>{
                return(
                    {category: "Хищные птицы"}
                )
            })
            break 
            case 5: 
            this.setState(()=>{
                return(
                    {category: "Морские птицы"}
                )
            })
            break
            default: 
            this.setState({category: "Разминка"});
        };
       
    };

    handleClickToNextLevel = (e)=>{           //клик по кнопке next level вызывает функцию установки следующей категории вопросов и устанавливает значение false флага isrightanswer
        this.setQuestionCategory(this.state.count);
        this.createQuestion();
        this.getAnswersList();
        this.setState(()=>{
            return(
                {isRightAnswer : false}
            )
        });
    };



    render(){
        return (
                <div className="app">
                 <Header score ={this.getScore}/>
                 <Menu categoryData={this.getCategoryData}/>
                 <Questions createQuestion={this.state.bird} getCurrentBird={this.getCurrentBird} isRightAnswer={this.state.isRightAnswer}/>
                 <Answers getAnswersList={this.state.answerList} handleClick={this.handleClick} isRightAnswer={this.state.isRightAnswer} createDescription={this.createDescription}/>
                 <NextButton isRightAnswer={this.state.isRightAnswer} handleClick={this.handleClickToNextLevel}/>
                </div>
        )
    }
}
export default Game;