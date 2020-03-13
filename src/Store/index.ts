import {createStore, applyMiddleware, Store} from "redux";
import CreateSagaMiddlware from "redux-saga"
import { RepositoriesState } from "./ducks/repositories/types"

import rootReducer from "./ducks/rootReducer";
import {rootSaga} from "./ducks/rootSaga"

export interface AplicationState {
    repositories: RepositoriesState
}

const sagaMiddlware = CreateSagaMiddlware()

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export default store