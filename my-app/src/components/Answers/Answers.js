import React from 'react';
import './Answers.css';
import Description from './Description.js';
import AnswerList from './AnswerList.js';

class Answers extends React.Component{

    render(){
        return (
            <div className="answers-conteiner">
                <AnswerList listOfNames={this.props.getAnswersList} handleClick={this.props.handleClick}  isRightAnswer={this.props.isRightAnswer}/>
                <Description createDescription={this.props.createDescription}/>
            </div>
        )
    }
}
export default Answers;