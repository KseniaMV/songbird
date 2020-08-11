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
            items: [],
            itemName: "",
            image: ""
        };
    }
 
    componentDidMount(){
        let warmUp = birdsData.Разминка;
        let randomCount = Math.floor(Math.random() * warmUp.length);
        let bird = warmUp[randomCount];
        this.setState({ 
            isLoaded: true,
            items: bird,
            itemName: bird.name,
            image: bird.image

        })
        console.log(bird.name)
    }

        
    render(){
        return(
            <div className="questions-conteiner">
                <BirdInfo name={this.state.items.name} audio={this.state.items.audio} image={this.state.items.image}/>                
            </div>
    
        )
    }
    
}
    

export default Questions;