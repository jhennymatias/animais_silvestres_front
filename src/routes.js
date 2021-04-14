import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Main from './pages/Main'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                <Route path = "/main" component = {Main}/>
            </Switch>
        </BrowserRouter>
    );
}