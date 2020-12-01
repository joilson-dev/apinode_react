import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/home/index";
import Login from "../pages/auth/index";


const routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            {/* <Redirect from ="*" to = "/"/> */}

        </Switch>
        </BrowserRouter>
    )
}

export default routes;