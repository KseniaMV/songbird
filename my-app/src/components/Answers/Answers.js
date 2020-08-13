import React from 'react';
import './Answers.css';
import Description from './Description.js';
import AnswerList from './AnswerList.js';
import birdsData from '../../birdsData.json';

class Answers extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           isRightAnswer: false,
           isLoaded: false,
           birdsList: [],
           category: "Разминка"
       }
    }
    /*componentDidMount(){
        let listOfBird = birdsData.Разминка;
        listOfBird.forEach(element => {
            console.log(element.name);
            let birdName = element.name;
            this.setState({
                isLoaded: true,
                birdsList: this.state.birdsList.push(birdName)
            })
          
            
        });
        console.log(this.state.birdsList);
  
      
    }*/

    render(){
        return (
            <div className="answers-conteiner">
                <AnswerList name={this.state.birdsList}/>
                <Description/>
            </div>
        )
    }
}
export default Answers;