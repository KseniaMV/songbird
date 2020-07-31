import React from 'react';
import './Header.css';
import logo from '../../images/images.png'


class Header extends React.Component{
    render(){
        return(
           <div className="header">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="score-conteiner">
                    <p className="score-title">score:</p>
                    <p className="score-count">11</p>
                </div> 
            </div>
        )
        
    }

}
export default Header;


