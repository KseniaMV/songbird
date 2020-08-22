import React from 'react';
import './Answers.css';
import Description from './Description.js';
import AnswerList from './AnswerList.js';
import birdsData from '../../birdsData.json';

class Answers extends React.Component{
    constructor(props){
       super(props);
       this.state = {
       }
    }
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