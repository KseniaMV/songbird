import React from 'react';
import './AnswersItem.css';

class AnswersItem extends React.Component{
    render(){
        return (
            <>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            <div className="answers-item">
                <input className="answers-item_input" type="radio" value="blue"/>
                <label className="answers-item_label" htmlFor="">Орел</label>
            </div>
            </>
        )
    }
}
export default AnswersItem;