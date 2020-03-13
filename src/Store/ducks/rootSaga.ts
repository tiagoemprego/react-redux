import { all, takeLatest } from "redux-saga/effects"

import { RepositoryTypes } from "./repositories/types";
import load from "./repositories/sagas";

export function* rootSaga() {
    return yield all([
        takeLatest(RepositoryTypes.LOAD_REQUEST, load)
    ])
}
