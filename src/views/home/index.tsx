import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Home } from "../../Store/ducks/home/types";
import { AplicationState } from "../../Store";
import * as HomeActions from "../../Store/ducks/home/actions"

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

        return (
            <ul>
                {home.map(el =>
                        <li key={el.id}>
                            <img src={el.background} alt={el.slug} width="240"/>
                            <video width="320" height="180" controls>
                                <source src={el.clip} type="video/mp4" />
                            </video>

                            <p>
                                {el.name} <br/>
                                {el.slug} <br/>
                                {el.released}
                            </p>
                        </li>
                    )}
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
