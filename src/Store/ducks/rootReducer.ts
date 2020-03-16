import { combineReducers } from "redux";

import repositories from "./repositories"
import home from "./home"
import internal from "../ducks/internalGames";

export default combineReducers({
    repositories,
    home,
    internal
})
