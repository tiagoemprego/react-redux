import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Home } from "../../Store/ducks/home/types";
import { AplicationState } from "../../Store";
import * as HomeActions from "../../Store/ducks/home/actions"

import Card from "../../Components/card";

interface StateProps {
    home: Home[]
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
        const { home } = this.props;

        return home.map( el =>  <Card key={el.id} home={el} /> );
    }
}

const mapStateToProps = (store: AplicationState) => ({
    home: store.home.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)
