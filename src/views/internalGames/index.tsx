import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { InternalState } from "../../Store/ducks/internalGames/types";
import * as  GameActions from "../../Store/ducks/internalGames/actions"
import { AplicationState } from "../../Store";

interface StateProps {
    internal: InternalState
    loading: boolean
    error: boolean
}

interface DispatchProps {
    doRequest(id?: any): void
}

interface OwnProps {
    match?: any
}

type Props = StateProps & DispatchProps & OwnProps;

class internalGame extends Component<Props> {
    componentDidMount() {
        const { doRequest } = this.props;
        let { id } = this.props.match.params;
        if(id) {
            doRequest(id);
        }
    }

    render(){
        const { internal, loading } = this.props;
        console.log("data", internal)

        return <div>


            {/*<h1>{internal.data.name}</h1>*/}
        </div>
    }

}

const mapStateToProps = (state: AplicationState) => ({
    internal: state.internal.data,
    loading: state.internal.loading,
    error: state.internal.error
});

const mapDispatchToProps =  (dispatch: Dispatch) =>
    bindActionCreators(GameActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(internalGame);