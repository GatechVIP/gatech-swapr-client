import React from 'react';
import { BrowserRouter as Router, browserHistory, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import SubmitAssignment from './view/SubmitAssignment';

const Main = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/submit" component={SubmitAssignment}/>//link to sample submit page

        </Switch>
    </Router>
);

export default Main;
