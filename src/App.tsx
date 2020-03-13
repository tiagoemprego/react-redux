import React from "react";
import { Provider } from "react-redux";

import store from "./Store";
import RepositoryList from "./Components/repositoryList"


const  App = () => (
    <Provider store={store}>
        <RepositoryList />
    </Provider>
);

export default App;
