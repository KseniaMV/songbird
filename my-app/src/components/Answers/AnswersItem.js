import React from 'react';
import './Answers.css';

class AnswersItem extends React.Component{
    render(){
        return (
            <input className="answers-item"type="checkbox" value="blue"/>
            <input className="answers-item"type="checkbox" value="blue"/>
            <input className="answers-item"type="checkbox" value="blue"/>
            <input className="answers-item"type="checkbox" value="blue"/>
            <input className="answers-item"type="checkbox" value="blue"/>
        )
    }
}
export default AnswersItem;