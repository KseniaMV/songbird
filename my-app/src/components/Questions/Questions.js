import React from 'react';
import './Questions.css';

class Questions extends React.Component{
    render(){
        return(
            <div className="questions-conteiner">
                <div className="questions_image">img</div>
                <div className="questions_audio-conteiner">
                    <h3 className="audio_title">Name of Bird</h3>
                    <audio controls source src="audio/music.mp3" type="audio/mpeg">song of bird</audio>
                </div>
            </div>
        )
    }
}

export default Questions;