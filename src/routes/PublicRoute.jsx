import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuthenticated from '../services/sessionManagement';

/**
 * The isAuthenticated() function can be anything that checks the credentials recieved in the
 * login http response. These credentials may be stored in any convenient manner, as this is
 * not a security functionality. Session management should be done server-side.
 */

const PublicRoute = ({ component: Component, restricted, path }) => (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
        render={() => (
            isAuthenticated() && restricted
                ? <Redirect to="/home" />
                : <Component path={path} />
        )}
    />
);

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired,
    restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
