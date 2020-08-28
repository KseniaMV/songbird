import React from 'react';
import './Menu.css';

class Menu extends React.Component{

    render() {
        let categoryData = this.props.categoryData();
        let menuItems = categoryData.title.map(item =>{
            return <li key={item} className={item === categoryData.name ? "menu_item selected-category": "menu_item"}>{item}</li> 
        });
        return (
        <div className="nav">
            <ul className="nav_menu">
                {menuItems}
            </ul>
        </div>
        )
    }
    
}

export default Menu;


