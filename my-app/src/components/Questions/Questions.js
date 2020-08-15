import React from 'react';
import './Questions.css';
import BirdInfo from './BirdInfo.js';
import defaultImage from '../../images/images.png';

class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            image: defaultImage,
            audio: '',
            species: '',
            isRightAnswer: ''
        };
    }


    render(){
        return(
            <div className="questions-conteiner">
                <BirdInfo name={this.props.createQuestion.name} audio={this.props.createQuestion.audio} image={this.props.createQuestion.image}/>                
            </div>
    
        )
    }
    
}
    

export default Questions;