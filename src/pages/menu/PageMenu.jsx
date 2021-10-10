import React from 'react';
import {Link} from 'react-router-dom';
import { Nav } from '../../assets/style/StyleMenu';


const Menu = () => {

    const  istrue = false;


    return (
        <>
            <Nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/AgendaeEventos'>Agenda & Eventos</Link></li>
                    <li><Link to='/Comunidades'>Comunidade</Link></li>
                    <li> {istrue ? <Link to='/Login'>Perfil</Link> : <Link to='/Home'>Login</Link>}</li>
                </ul>
            </Nav> 
        </>
    )
}
export default Menu;