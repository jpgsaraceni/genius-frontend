import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthenticated from '../services/sessionManagement';

/**
 * The isAuthenticated() function can be anything that checks the credentials recieved in the
 * login http response. These credentials may be stored in any convenient manner, as this is
 * not a security functionality. Session management should be done server-side.
 */
const PrivateRoute = ({ component: Component, path }) => (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
        render={() => (
            isAuthenticated()
                ? <Component path={path} />
                : <Redirect to="/login" />
        )}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
};

export default PrivateRoute;
