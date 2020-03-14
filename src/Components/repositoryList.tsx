import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../Store/ducks/repositories/types";
import { AplicationState } from "../Store"
import * as RepositoriesActions from "../Store/ducks/repositories/actions";

//Mapeia as informações que vem do mapStateToProps
interface StateProps {
    repositories: Repository[]
}

//Mapeia as informações que vem do mapDispatchToProps
interface DispatchProps {
    loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
    componentDidMount(){
        const { loadRequest } = this.props;
        loadRequest()
    }

    render(){
        const { repositories } = this.props;

        return (
            <ul>
                {repositories.map(repository =>
                    <li key={repository.id}>{repository.name} - {repository.language}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps  = (store: AplicationState) => ({
    repositories: store.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);

