import React from 'react';
import './Questions.css';


class Questions extends React.Component{
    render(){
        return(
            <div className="questions-conteiner">
                <div className="questions_image"></div>
                <div className="questions_audio-conteiner">
                    <h3 className="audio_title">Name of Bird</h3>
                    <audio className="audio_sound" controls>song of  birds</audio>
                </div>
            </div>
        )
    }
}

export default Questions;