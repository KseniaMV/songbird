import React from 'react';
import './BirdInfo.css';

class BirdInfo extends React.Component{
    render(props){
        return (
            <div className="bird-info">
                <div className="bird-info__image-and-sound">
                    <div className="bird_image bird_image--hidden">default image</div>
                    <div className="bird_audio-conteiner">
                        <h3 className="audio_title">{this.props.species}</h3>
                        <p className="audio_subtitle--hidden"></p>
                        <audio className="audio_sound" src={this.props.audio} controls></audio>
                    </div>
                </div>
                <p className="bird_description">
                    
                </p>
            </div>
        )
    }
}
export default BirdInfo;