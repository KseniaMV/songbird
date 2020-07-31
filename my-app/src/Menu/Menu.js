import React from 'react';
import './Menu.css';

class Menu extends React.Component{
    render() {
        return (
        <div className="nav">
            <ul className="nav_menu">
                <li className="menu_item"><a className="menu_link">Разминка</a></li>
                <li className="menu_item"><a className="menu_link">Воробьинные</a></li>
                <li className="menu_item"><a className="menu_link">Лесные птицы</a></li>
                <li className="menu_item"><a className="menu_link">Певчие птицы</a></li>
                <li className="menu_item"><a className="menu_link">Хищные птицы</a></li>
                <li className="menu_item"><a className="menu_link">Морские птицы</a></li>
            </ul>
        </div>
        )
    }
    
}
export default Menu;
