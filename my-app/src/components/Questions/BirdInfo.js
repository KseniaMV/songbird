import React from 'react';
import './BirdInfo.css';

class BirdInfo extends React.Component{
    render(){
        return (
            <div className="bird-info">
                <div className="bird-info__image-and-sound">
                    <div className="bird_image bird_image--hidden">default image</div>
                    <div className="bird_audio-conteiner">
                        <h3 className="audio_title">*********</h3>
                        <p className="audio_subtitle--hidden">fghjdn</p>
                        <audio className="audio_sound" controls>song of  birds</audio>
                    </div>
                </div>
                <p className="bird_description">
                    
                </p>
            </div>
        )
    }
}
export default BirdInfo;