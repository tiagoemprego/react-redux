import { all, takeLatest } from "redux-saga/effects"

import { RepositoryTypes } from "./repositories/types";
import { HomeTypes } from "./home/types";

import load from "./repositories/sagas";
import loadHome from "./home/sagas";

export function* rootSaga() {
    return yield all([
        takeLatest(RepositoryTypes.LOAD_REQUEST, load),
        takeLatest(HomeTypes.LOAD_REQUEST, loadHome)
    ])
}
