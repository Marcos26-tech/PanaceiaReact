import React from 'react';
import {Link} from 'react-router-dom';
import { Nav } from './StyleMenu';


const Menu = () => {

    return (
        <>
            <Nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/agendaeeventos'>Agenda & Eventos</Link></li>
                    <li><Link to='/comunidade'>Comunidade</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </Nav> 

        </>
    )
}
export default Menu;