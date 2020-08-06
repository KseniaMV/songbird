import React from 'react';
import './Description.css';
import BirdInfo from '../Questions/BirdInfo.js';



class Description extends React.Component{
    render(){
        return (
        <div className="description">
            <p className="default_text">
                Послушайте плеер.
                Выберите птицу из списка
                
            </p>   
        </div>
        )
    }

}
export default Description;