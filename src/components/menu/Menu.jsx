import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Menu.css';

class Menu extends Component {
    render() {
        return(
            <nav className="menu">
                <ul className="menu-itens">
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Menu