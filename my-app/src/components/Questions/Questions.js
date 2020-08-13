import React from 'react';
import './Questions.css';
import BirdInfo from './BirdInfo.js';
import defaultImage from '../../images/images.png';

class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            name: '',
            image: '',
            audio: '',
            species: ''
        };
    }
    componentDidMount() {
        let currentBird = this.props.currentBird;
        console.log("name " + currentBird.name)
        this.setState({ 
            isLoaded: true,
            name: currentBird.name,
            audio: currentBird.audio,
            species: currentBird.species

        })
        if(this.props.isRightAnswer === false){
            this.setState({
                image: defaultImage
            })
        }else{
            this.setState({image: currentBird.image});
        }
   
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