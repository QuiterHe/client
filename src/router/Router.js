/**
 * Created by hezhang on 17/6/1.
 */
/* src/router/Router.js */

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './router.config';

const Routers = () =>  (
    <Router>
        <Switch>
            {
                routes.map((route, i) => (
                    <Route key={i} path={route.path} exact={route.exact} component={route.component} />
                ))
            }
        </Switch>
    </Router>
);

export default Routers;