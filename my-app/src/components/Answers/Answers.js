import React from 'react';
import './Answers.css';
import Description from './Description.js';
import AnswerList from './AnswerList.js';
import birdsData from '../../birdsData.json';

class Answers extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           isRightAnswer: false,
           isLoaded: false,
           birdsList: [],
           category: "Разминка"
       }
    }

    getListOfNames(){
        let listOfNames = this.props.answersList;
        return listOfNames;
    }

    handleClick = (e)=>{
        let targetName = e.target.value;
        targetName.className += ""

    }

    render(){
        return (
            <div className="answers-conteiner">
                <AnswerList listOfNames={this.getListOfNames()} handleClick={this.handleClick}/>
                <Description/>
            </div>
        )
    }
}
export default Answers;