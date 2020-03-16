import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import store from "./Store";
import HomeIndex from "./views/home";
import internalGame from "./views/internalGames";


const  App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={ HomeIndex } />
                <Route exact path="/game/:id" component={ internalGame } />
            </Switch>
        </Router>
    </Provider>
);

export default App;
