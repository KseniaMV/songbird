import React from 'react';
import './Menu.css';

class Menu extends React.Component{
   constructor(props) {
        super(props);
        this.state={   
        }; 
     
    }

    render() {
        return (
        <div className="nav">
            <ul className="nav_menu">
                <li className="menu_item">Разминка</li>
                <li className="menu_item">Воробьиные</li>
                <li className="menu_item">Лесные птицы</li>
                <li className="menu_item">Певчие птицы</li>
                <li className="menu_item">Хищные птицы</li>
                <li className="menu_item">Морские птицы</li>
            </ul>
        </div>
        )
    }
    
}

export default Menu;
