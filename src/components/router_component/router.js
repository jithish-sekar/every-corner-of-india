import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LandingPageComponent from '../landingpage_component/landingpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={LandingPageComponent} />
        
    </Switch>

)
export default withRouter(Router);