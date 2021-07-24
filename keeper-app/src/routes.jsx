import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Notes from './pages/Notes';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/notes" component={Notes} />
        </BrowserRouter>
    )
}

export default Routes;