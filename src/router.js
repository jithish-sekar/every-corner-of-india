import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './about';

const Main = () => (
    <Switch>
        <Route exact path='/about' component={About}/>
    </Switch>

)
export default withRouter(Main);