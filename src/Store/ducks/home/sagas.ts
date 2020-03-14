import { call, put } from "redux-saga/effects"
// import apiGitHub from "../../../services/apiGitHub";
import apiJson from "../../../services/apiJson";

import { loadSuccess, loadFailure } from "./actions";

export function* loadHome() {
    try {
        const response = yield call(apiJson.get, '/api/games');
        console.log(response.data.results)
        const getData = response.data.results.map((el:any) => {
            return {
                id: el.id,
                slug: el.slug,
                name: el.name,
                released: el.released,
                background: el.background_image,
                clip: el.clip.clips.full
            }
        })
        yield put(loadSuccess(getData));

    }catch (err) {
        yield put(loadFailure());
    }
}

export default loadHome
