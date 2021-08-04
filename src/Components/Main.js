import React, { Component } from "react";

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

//Importing Components
import NavComponent from "./NavComponent";
import Home from "./Home";
import Presence from "./Presence";
import TracksProposal from "./TracksProposal";
import TracksConfirmed from "./TracksConfirmed";

//importing react-redux stuff
import { connect } from "react-redux";

//importing reducers
import {
    fetchDivers
} from "../redux/ActionCreators";

const mapDispatchToProps = {
    fetchDivers: () => fetchDivers(),

}

class Main extends Component {
    componentDidMount() {
        this.props.fetchDivers();
    }

    render() {
        return (
            <div>
                <NavComponent />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/presence" component={Presence} />
                    <Route exact path="/presence/tracksProposal" component={TracksProposal} />
                    <Route exact path="/presence/tracksProposal/TracksConfirmed" component={TracksConfirmed} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Main));