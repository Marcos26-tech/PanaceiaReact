import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Nav } from './StyleMenu';
import Home from '../home/Home';
import AcessarGrupo from '../comunidade/AcessarGrupo';
import Agenda from '../agenda/Agenda';
import Login from '../login/Login';

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

            <main>
                <Switch>
                <Route exact path="/"component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/agendaeeventos' component={Agenda} />
                <Route path='/comunidade' component={AcessarGrupo} />
                <Route path='/login' component={Login} />
                </Switch>
            </main>  
        </>
    )
}
export default Menu;