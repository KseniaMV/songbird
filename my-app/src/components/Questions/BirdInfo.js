import React from 'react';
import './BirdInfo.css';

class BirdInfo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isDescription : false
        }
    }
    componentDidMount(){
        if(this.props.isDescription){
            this.setState({
                isDescription: true
            })
        }

    }
    render(){
        return (
            <div className="bird-info">
                <div className="bird-info__image-and-sound">
                    <img className="bird_image bird_image--hidden" src={this.props.image} alt={this.props.name}/>
                    <div className="bird_audio-conteiner">
                        <h3 className="audio_title-default">{this.state.isDescription === true? this.props.name: '******'}</h3>
                        <p className="audio_subtitle--hidden">{this.props.name}</p>
                        <audio className="audio_sound" src={this.props.audio} controls></audio>
                    </div>
                </div>
                <p className="bird_description">{this.props.description}</p>
            </div>
        )
    }
}
export default BirdInfo;