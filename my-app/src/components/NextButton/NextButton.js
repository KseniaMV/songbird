import React from 'react';
import './NextButton.css';

class NextButton extends React.Component{
    render(){
        let isRightAnswer = this.props.isRightAnswer;
        return (
            <button className={isRightAnswer === true? "button_next-level button--active": "button_next-level button--default"} handleclick={this.props.handleclick}>Next Level</button>
        )
    }
}
export default NextButton;