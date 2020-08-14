import React from 'react';
import './NextButton.css';

class NextButton extends React.Component{

    handleClick = () => {
        this.setState({
            category: "Воробьиные"
        })
    }
    render(){
        return (
            <button className="button_next-level" onClick={this.props.handleClick}>Next Level</button>
        )
    }
}
export default NextButton;