import React from 'react';
import Header from '../Header/Header.js'
import Menu from '../Menu/Menu.js';
import Questions from '../Questions/Questions.js';
import Answers from '../Answers/Answers.js';
import birdsData from '../../birdsData.json';
import NextButton from '../NextButton/NextButton.js';
import win from '../../sounds/win.mp3';
import wrong from '../../sounds/wrong.mp3';

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
            clickCount: 0,
            gameOver: false
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
        this.setState(()=>{
            return(
                {
                    currentBird: currentBird.name,
                    bird: currentBirdData
                }
            )                                     //запись в state загаданной птицы и ее данных
            
        })
        return currentBirdData;
    };
        
    
    //создание описания птицы
        createDescription=()=>{                         
            let id = this.state.id;                     //получение названия выбранной пользователем птицы
            let category = this.state.category;         //получение категории вопросов
            let bird = dataBirds[category][id];         //доступ к данным птицы в выбранной категории
            return bird;
        };
    

    //функция сравнения ответа с вопросом
    checkAnswer = ()=>{
        let answer = this.state.answer;                                     //получение навзания птицы, который выбрал пользователь
        let prevScore = this.state.score;                                   //получение количества очков пользователя
        let currentBird = this.state.currentBird;                           //название птицы, которую "загадала" игра 
        if(answer === currentBird && this.state.isRightAnswer === false){
            this.winSound();   //сравнение варианта ответа и загаданной птицы
            let labelId = this.state.id;
            let label = document.querySelector("#bird" + labelId);
                label.classList.remove("answers-item_label");
                label.classList.add("answers-item_label--selected-true");
            this.scoreCount(prevScore);                                      //если названия равны, то вызывается функция подсчета очков, куда передается текущее количество очков пользователя    
            this.setState((state)=>{
                return({
                    isRightAnswer: true,                                     //флаг = ответ правильный
                    count: state.count + 1, 
                })      
            });
            let audio = document.querySelector('.audio_sound');
            audio.pause();
        }

    };

    changeInputColor = ()=>{
        let labelId = this.state.id;
        let label = document.querySelector("#"+"bird" + labelId);
        if(!label.classList.contains("answers-item_label--selected-true")){
            label.classList.remove("answers-item_label");
            label.classList.add("answers-item_label--selected-false");
            this.wrongSound();
        }
            
    }

    //подсчет очков
    scoreCount = (prevScore)=>{
            let answerCount = 6;                        //максимальное количество попыток  
            let clickCount = this.state.clickCount;     //количество попыток (сlick по вариантам ответов)
            let finalScore = answerCount - clickCount;  //подсчет очков в зависимости от количества уже использованных попыток 6 = 0
            if(answerCount === 0){                      
                finalScore = 0;
            }  
            this.setState(()=>{
                return ({
                    score: prevScore + finalScore      //запись в state полученных за правильный ответ очков
                })
            })    
    };

    //функция завершения игры (проверяет категорию и устанавливает флаг завершения игры)
    checkGameResult = () =>{
        let category = this.getCategoryData();
        if(category.name === "Морские птицы" && this.state.isRightAnswer === true){
            this.setState(()=>{
                return({
                    gameOver: true
                })
            });
            setTimeout(() => {
                this.props.checkGameState(this.state.gameOver, this.state.score);   
            }, 1500);
            
        }
    }
    winSound = () =>{
        new Audio(win).play();
    }

    wrongSound = () =>{
        new Audio(wrong).play();
    }


    /******************************getters***********************************/

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
        this.setState(()=>{
            return({
                answerList: answersList                          //запись списка в state
            })
                                          
        })
        return answersList;
    };



    /******************************setters***********************************/

     //функция устанавливает категорию вопросов
    setQuestionCategory =(categoryCount)=>{    
        switch(categoryCount) {
            case 1: 
            this.setCategoryName("Воробьиные")
            break
            case 2:
            this.setCategoryName("Лесные") 
            break
            case 3: 
            this.setCategoryName("Певчие птицы")
            break 
            case 4: 
            this.setCategoryName("Хищные птицы")
            break 
            case 5:
            this.setCategoryName("Морские птицы") 
            break
            default: 
            this.setState({category: "Разминка"});
        };
       
    };

    setCategoryName=(name)=>{
        this.setState(()=>{
            return(
                {category: name}
            )
        });
    };

    setRightAnswerStateFalse=()=>{
        this.setState(()=>{
            return({
                isRightAnswer : false,
                id: '',
                clickCount: 0
            })
        });

    }

/************************************eventListeners***********************************/ 
  
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
            }).then(()=>this.checkAnswer()).then(()=>this.changeInputColor()).then(()=>this.checkGameResult());
    };

    handleClickToNextLevel = (e)=>{     //клик по кнопке next level вызывает функцию установки следующей категории вопросов и устанавливает значение false флага isrightanswer
        return new Promise((resolve,reject)=>{
            this.setQuestionCategory(this.state.count);
            resolve();

        }).then(()=>this.createQuestion()).then(()=>this.getAnswersList()).then(()=>this.setRightAnswerStateFalse())         
        
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