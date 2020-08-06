import React from 'react';
import './Questions.css';
import BirdInfo from './BirdInfo.js';


class Questions extends React.Component{
    render(){
        return(
            <div className="questions-conteiner">
                <BirdInfo/>
            </div>
        )
    }
}

export default Questions;