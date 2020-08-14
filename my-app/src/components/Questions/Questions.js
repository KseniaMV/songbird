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


    componentDidMount() {
        let currentBird = this.props.createQuestion();
        this.setState({ 
            isLoaded: true,
            name: currentBird.name,
            audio: currentBird.audio,
            species: currentBird.species,
        });
        if(this.props.isRightAnswer === true){
            this.setState({
                image: currentBird.image
            })
        }
        this.props.getCurrentBird(this.state.name);


    }




    render(){
        return(
            <div className="questions-conteiner">
                <BirdInfo name={this.state.name} audio={this.state.audio} image={this.state.image}/>                
            </div>
    
        )
    }
    
}
    

export default Questions;