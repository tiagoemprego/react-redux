import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { InternalState } from "../../Store/ducks/internalGames/types";
import * as  GameActions from "../../Store/ducks/internalGames/actions"

const internalGame = () => {
    return <div>
        <h1>Interna</h1>
    </div>
};

export default internalGame;