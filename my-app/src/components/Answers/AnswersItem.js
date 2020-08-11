import React from 'react';
import './AnswersItem.css';

class AnswersItem extends React.Component{
    render(props){
        return (
            <>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">{this.props.name}</label>
            </div>
            </>
        )
    }
}
export default AnswersItem;