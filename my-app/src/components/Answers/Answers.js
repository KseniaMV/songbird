import React from 'react';
import './Answers.css';
import AnswersItem from './AnswersItem.js';

class Answers extends React.Component{
    render(){
        return (
            <div className="answers-conteiner">
                    <ul className="answers-list">
                        <AnswersItem/> 
                    </ul>
            </div>
        )
    }
}
export default Answers;