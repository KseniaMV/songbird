import React from 'react';
import './AnswerList.css';
import AnswersItem from './AnswersItem';

class AnswerList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
   
 
    render(){
        let listOfNames = this.props.listOfNames;
        let array = listOfNames.map(name => {
            return(
                     <AnswersItem key={name} name={name} handleClick={this.props.handleClick} isRightAnswer={this.props.isRightAnswer}/>
            )  
        })

        return (
            <form className="answer-list">
                {array}
            </form>
        )

    }
}

export default AnswerList;
