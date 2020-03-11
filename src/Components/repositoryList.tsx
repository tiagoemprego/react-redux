import React, {Component} from "react";
import { connect } from "react-redux";
import { AplicationState } from "../Store"

class RepositoriList extends Component {
    componentDidMount(){}

    render(){
        return (
            <ul />
        );
    }
}

const mapStateToProps  = (store: AplicationState) => ({
    repositories: store.repositories.data
})

export default connect(mapStateToProps)(RepositoriList);

