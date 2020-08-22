import React from 'react';
import './Description.css';
import BirdInfo from '../Questions/BirdInfo.js';

class Description extends React.Component{
    render(){
        let birdDescription = this.props.createDescription();
        let description;
        if(!birdDescription){
                    description = <p className="default_text">
                        Послушайте плеер.
                        Выберите птицу из списка 
                    </p>    
        }else{
            description =  <BirdInfo name={birdDescription.name} audio={birdDescription.audio} image={birdDescription.image} description={birdDescription.description} species={birdDescription.species} isDescription='true'/> 

        }
        return(
            <div className="description">
                {description}
            </div>
           
        )  
        
      
    }

}
export default Description;