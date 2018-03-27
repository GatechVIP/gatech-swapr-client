import React from 'react';
import { BrowserRouter as Router, browserHistory, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

const Main = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
);

export default Main;
