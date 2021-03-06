import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../src/page/login'
import Home from '../src/page/home'
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/login"/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

