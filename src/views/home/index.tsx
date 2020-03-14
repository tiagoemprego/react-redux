import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Home } from "../../Store/ducks/home/types";
import { AplicationState } from "../../Store";
import * as HomeActions from "../../Store/ducks/home/actions"

interface StateProps {
    homeList: Home[]
}

interface DispatchProps {
    loadRequest(): void
}

type props = StateProps & DispatchProps;

class HomeIndex extends Component<props>{
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest()
    }

    render(){
        const { homeList } = this.props;

        return (
            <ul>
                <li>teste</li>
                {/*{homeList.map(el =>*/}
                {/*        <li key={el.id}>{el.name}</li>*/}
                {/*    )}*/}
            </ul>
        );
    }
}

const mapStateToProps = (store: AplicationState) => ({
    home: store.home.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(HomeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)
