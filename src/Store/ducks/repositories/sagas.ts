import { call, put } from "redux-saga/effects"
import apiGitHub from "../../../services/apiGitHub";

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
    try {
        const response = yield call(apiGitHub.get, 'users/tiagoemprego/repos');
        yield put(loadSuccess(response.data));
    }catch (err) {
        yield put(loadFailure());
    }
}

export default load