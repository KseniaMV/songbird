import React from 'react';
import './Questions.css';
import BirdInfo from './BirdInfo.js';
import birdsData from '../../birdsData.json';




class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
 
    componentDidMount(){
        let warmUp = birdsData.Разминка;
        let randomCount = Math.floor(Math.random() * warmUp.length);
        let bird = warmUp[randomCount];
        this.setState({ 
            isLoaded: true,
            items: bird
          
        })
        console.log(randomCount);
        console.log(bird);
        console.log(warmUp);
    }

        
    render(){
        return(
            <div className="questions-conteiner">
                <BirdInfo species={this.state.items.species} audio={this.state.items.audio} />                
            </div>
    
        )
    }
    
}
    

export default Questions;