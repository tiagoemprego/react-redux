import { Reducer } from "redux";
import { HomeState, HomeTypes } from "./types";

const INITIAL_STATE: HomeState = {
    data: [],
    loading: false,
    error: false
};

const reducer: Reducer<HomeState> = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeTypes.LOAD_REQUEST:
            return {...state, loading: true};
        case HomeTypes.LOAD_SUCCESS:
            return {...state, loading: false, data: action.payload.data};
        case HomeTypes.LOAD_FAILURE:
            return {...state,loading: false, error: true, data: []};
        default:
            return state
    }
};

export default reducer
