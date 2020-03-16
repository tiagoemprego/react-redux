import {call, put} from "redux-saga/effects"
import {AnyAction} from "redux";
import {requestFailure, requestSuccess} from "./actions";

import {Internal} from "./types";
import apiJson from "../../../services/apiJson";
import {loadFailure, loadSuccess} from "../home/actions";

function* loadInternalGame(id: string) {
    try {
        const response = yield call(apiJson.get, '/api/games/' + id);
        const getData = response.data.results.map((el:any) => {
            return {
                id: el.id,
                slug: el.slug,
                name: el.name,
                background: el.background_image,
                released: el.released,
            }
        });
        yield put(loadSuccess(getData));

    }catch (err) {
        yield put(loadFailure());
    }
}

export default function* loadGame (action:AnyAction) {
    try {
        let data: Internal = yield call(loadInternalGame, action.payload.id) ;
        yield put(requestSuccess(data));
    }
    catch (e) {
        yield put(requestFailure());
    }
}
