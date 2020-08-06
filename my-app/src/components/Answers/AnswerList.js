import React from 'react';
import './AnswerList.css';
import AnswersItem from './AnswersItem';

class AnswerList extends React.Component{
    render(){
        return (
            <form className="answer-list">
                <AnswersItem />
            </form>
        )
    }
}

export default AnswerList;