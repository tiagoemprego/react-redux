import { Reducer } from "redux";
import { InternalState, InternalTypes } from "./types";

const INITIAL_STATE: InternalState = {
    data: {
        slug: '',
        name: '',
        description: '',
        released: '',
        background: '',
    },
    loading: false,
    error: false
};

const reducer: Reducer<InternalState> = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case InternalTypes.LOAD_REQUEST:
            return {...state, loading: true};
        case InternalTypes.LOAD_SUCCESS:
            return {...state, loading: false, data: action.payload.data};
        case InternalTypes.LOAD_FAILURE:
            return {...state,loading: false, error: true, data: []};
        default:
            return state
    }
};

export default reducer
