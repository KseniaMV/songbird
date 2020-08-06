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
            </div>
        )
    }
}
export default Answers;