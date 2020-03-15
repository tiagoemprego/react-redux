import React from "react";
import { Provider } from "react-redux";

import store from "./Store";
import HomeIndex from "./views/home";


const  App = () => (
    <Provider store={store}>
        <HomeIndex />
    </Provider>
);

export default App;
