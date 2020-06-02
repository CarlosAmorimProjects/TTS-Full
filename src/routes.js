import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Text from "./pages/text/text";
import Instru from "./pages/instructions/instru";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Text} />
                <Route path = "/instru" component = {Instru} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;