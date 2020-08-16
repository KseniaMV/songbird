import React from 'react';
import './AnswersItem.css';

class AnswersItem extends React.Component{
    render(){
        let rightAnswerState = this.props.isRightanswer;
        return (
            <>
            <div className="answers-item">
                <input className={rightAnswerState===true? "answers-item_input selected-true" : "answers-item_input selected-false"} type="radio" name="bird" value={this.props.name} onClick={this.props.handleClick}/>
                <label className="answers-item_label" htmlFor="">{this.props.name}</label>
            </div>
            </>
        )
    }
}
export default AnswersItem;
