import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main'
import Cadastro_Animal from './pages/Cadastro_Animal';
import Cadastro_Cidade from './pages/Cadastro_Cidade';
import IndexAnimais from './pages/Index_Animais';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                <Route path = "/main" component = {Main}/>
                <Route path = "/cadastroAnimal" component = {Cadastro_Animal}/>
                <Route path = "/cadastroEstado" component = {Cadastro_Cidade}/>
                <Route path = "/indexAnimais" component = {IndexAnimais}/>
            </Switch>
        </BrowserRouter>
    );
}