import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';


class Header extends React.Component{
    render(){
        let score = this.props.score();
        return(
           <div className="header">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="score-conteiner">
                    <p className="score-title">score:</p>
                    <p className="score-count">{score}</p>
                </div> 
            </div>
        )
        
    }

}
export default Header;


