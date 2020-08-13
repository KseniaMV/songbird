import React from 'react';
import './NextButton.css';

class NextButton extends React.Component{
    render(){
        return (
            <button className="button_next-level" onClick={this.props.toNextCategory}>Next Level</button>
        )
    }
}
export default NextButton;