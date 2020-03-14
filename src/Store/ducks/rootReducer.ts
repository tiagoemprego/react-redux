import { combineReducers } from "redux";

import repositories from "./repositories"
import home from "./home"

export default combineReducers({
    repositories,
    home
})
