import React from 'react';
import './Answers.css';
import Description from './Description.js';
import AnswerList from './AnswerList.js';



class Answers extends React.Component{
    render(){
        return (
            <div className="answers-conteiner">
                <AnswerList/>
                <Description/>
                <button className="button_next-level">Next level</button>
            </div>
        )
    }
}
export default Answers;