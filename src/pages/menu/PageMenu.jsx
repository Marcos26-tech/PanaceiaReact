import React from 'react';
import {Link} from 'react-router-dom';
import { Nav } from '../../assets/style/StyleMenu';


const Menu = () => {

    //falta fazer a validação com localstorage se o usuario estiver logado = true se não estiver sera = false.

    const  istrue = false;


    return (
        <>
            <Nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/AgendaeEventos'>Agenda & Eventos</Link></li>
                    <li><Link to='/Comunidades'>Comunidade</Link></li>
                    <li> {istrue ? <Link to='/Perfil'>Perfil</Link> : <Link to='/Login'>Login</Link>}</li>
                </ul>
            </Nav> 
        </>
    )
}
export default Menu;