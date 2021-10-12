import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';
import Help from '../pages/Help';
import Settings from '../pages/Settings';

/**
 * Renders each component according to the URL. Nest this inside your AppProvider in App.js.
 * @returns {BrowserRouter} Your application routes.
 */
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to="/home" from="/" />
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/settings" component={Settings} />
        <Route path="/help" component={Help} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;