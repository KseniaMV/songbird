import React from 'react';
import './Menu.css';

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isSelected: false
            
        };   
    }

componentDidMount() {
    let selectedCategory = this.props.currentCategory;
    console.log("selectedCategoty" + selectedCategory);
    let questionCategory = document.querySelectorAll('.menu_item');
    console.log(questionCategory)
       questionCategory.forEach((category, index) => {
           if(selectedCategory === index){
               category.className += "selected-category";
           }
    });
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
