import { call, put } from "redux-saga/effects"
import apiGitHub from "../../../services/apiGitHub";

import { loadSuccess, loadFailure } from "./actions";

export function* load() {
    try {
        const response = yield call(apiGitHub.get, 'users/tiagoemprego/repos');
        const getData = response.data.map((el:any) => {
            return {
                id: el.id,
                name: el.name,
                avatar_url: el.owner.avatar_url
            }
        })
        yield put(loadSuccess(getData));

    }catch (err) {
        yield put(loadFailure());
    }
}

export default load