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
    render(){
        return (
            <div className="answers-conteiner">
                <AnswerList listOfNames={this.props.getAnswersList} handleClick={this.props.handleClick}/>
                <Description/>
            </div>
        )
    }
}
export default Answers;