import { call, put } from "redux-saga/effects"
import apiGitHub from "../../../services/apiGitHub";

import { loadSuccess, loadFailure } from "./actions";

export function* loadHome() {
    try {
        const response = yield call(apiGitHub.get, 'users/tiagoemprego/repos');
        const getData = response.data.map((el:any) => {
            return {
                id: el.id,
                name: el.name
            }
        })
        yield put(loadSuccess(getData));

    }catch (err) {
        yield put(loadFailure());
    }
}

export default loadHome
