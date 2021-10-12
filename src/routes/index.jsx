import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

// import Home from '../pages/Home';
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';

/**
* Pages that can be accessed by a user who is not logged use the PublicRoute component.
*
* Pages that can only be accessed by authenticated users use the PrivateRoute component.
*
* Public pages that shouldn't be accessed by an authenticated user (e.g. login)
* use PublicRoute component with restricted prop.
*/
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <PublicRoute restricted path="/login" component={Login} />
                {/* <PrivateRoute path="/home" component={Home} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;