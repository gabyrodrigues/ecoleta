import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import ShowPoint from './pages/ShowPoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/"  />
            <Route component={CreatePoint} path="/cadastrar"  />
            <Route component={ShowPoint} path="/points/show/:id"  />
        </BrowserRouter>
    );
}

export default Routes;