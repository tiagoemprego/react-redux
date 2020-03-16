import { all, takeLatest } from "redux-saga/effects"

import { RepositoryTypes } from "./repositories/types";
import { HomeTypes } from "./home/types";
import { InternalTypes } from "./internalGames/types";

import load from "./repositories/sagas";
import loadHome from "./home/sagas";
import loadGame from "./internalGames/sagas"

export function* rootSaga() {
    return yield all([
        takeLatest(RepositoryTypes.LOAD_REQUEST, load),
        takeLatest(HomeTypes.LOAD_REQUEST, loadHome),
        takeLatest(InternalTypes.LOAD_REQUEST, loadGame),
    ])
}
