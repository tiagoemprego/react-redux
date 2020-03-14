import {createStore, applyMiddleware, Store} from "redux";
import CreateSagaMiddlware from "redux-saga"
import { RepositoriesState } from "./ducks/repositories/types"
import { HomeState } from "./ducks/home/types";

import rootReducer from "./ducks/rootReducer";
import {rootSaga} from "./ducks/rootSaga"

export interface AplicationState {
    repositories: RepositoriesState,
    home: HomeState
}

const sagaMiddlware = CreateSagaMiddlware()

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export default store
