import React from 'react';
import './AnswersItem.css';

class AnswersItem extends React.Component{
    render(){
        return (
            <>
            <div className="answers-item">
                <input id={this.props.id} className="answers-item_input" type="checkbox" name="bird" value={this.props.name} onClick={this.props.handleClick}/>
                <label className="answers-item_label" htmlFor={this.props.id} id={"bird" + this.props.id}>{this.props.name}</label>
            </div>
            </>
        )
    }
}
export default AnswersItem;
