import React from 'react';
import './NextButton.css';

class NextButton extends React.Component{
    render(){
        let isRightAnswer = this.props.isRightAnswer;
        return (
            <button className={isRightAnswer === true? "button_next-level button--active": "button_next-level button--default"} onClick={this.props.handleClick}>Next Level</button>
        )
    }
}
export default NextButton;