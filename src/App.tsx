import React from "react";
import { Provider } from "react-redux";

import store from "./Store";
// import RepositoryList from "./Components/repositoryList"
import HomeIndex from "./views/home";


const  App = () => (
    <Provider store={store}>
        {/*<RepositoryList />*/}
        <HomeIndex />
    </Provider>
);

export default App;
