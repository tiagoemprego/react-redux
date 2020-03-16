import {call, put} from "redux-saga/effects"
import {AnyAction} from "redux";
import {requestFailure, requestSuccess} from "./actions";

import {Internal} from "./types";
import apiJson from "../../../services/apiJson";
import {loadFailure, loadSuccess} from "../home/actions";

function* loadInternalGame(id: string) {
    try {
        const response = yield call(apiJson.get, '/api/games/' + id);
        const getData = {
            id: response.data.id,
            slug: response.data.slug,
            name: response.data.name,
            background: response.data.background_image,
            released: response.data.released,
        };

        yield put(loadSuccess(getData));

    }catch (err) {
        yield put(loadFailure());
        console.log(err)
    }
}

export default function* loadGame (action:AnyAction) {
    try {
        let data: Internal = yield call(loadInternalGame, action.payload.id) ;
        console.log(action)
        yield put(requestSuccess(data));
    }
    catch (err) {
        yield put(requestFailure());
        console.log(err)
    }
}
