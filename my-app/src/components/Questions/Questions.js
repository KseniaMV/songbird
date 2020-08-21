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
        let rightAnswerState = this.props.isRightAnswer;
        let image;
        if(rightAnswerState === false){
            image = defaultImage;
        }else{
            image = this.props.createQuestion.image;
        }
        return(
            <div className="questions-conteiner">
                <BirdInfo name={this.props.createQuestion.name} audio={this.props.createQuestion.audio} image={image} species={this.props.createQuestion.species} isRightAnswer={rightAnswerState === true? true:false}/>                
            </div>
    
        )
    }
    
}
    

export default Questions;