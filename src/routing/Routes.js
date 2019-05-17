import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../navigation/authentication/Dashboard.js';
import { Login } from '../navigation/authentication/Login.js';
import CardGame from '../card/CardGame.js';
import { PrivateRoute } from './PrivateRoute.js';
import { Register } from '../navigation/authentication/Register';
import HomePage from '../navigation/HomePage'

export default () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route exact path='/cardgame' component={CardGame} />
        </Switch>
    </BrowserRouter>;