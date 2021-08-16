import React, { Component } from "react";

//importing react-redux stuff
import { connect } from "react-redux";

//importing reactstrap stuff
import { Button, Form, FormGroup, Label, Input, Col, Table } from "reactstrap";

//importing react-router-dom stuff
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        divers: state.divers,
        tracks: state.tracks,
    };
};

class TracksConfirmed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="tableTracksConfirmed">
                <h1>Confirmation</h1>
                <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Divers</th>
                    <th>Tracks</th>
                    <th>2nd show</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <th scope="row">Jason</th>
                    <td>CR</td>


                </tr>
                <tr>
                    <th scope="row">Patrick</th>
                    <td>C</td>


                </tr>
                <tr>
                    <th scope="row">Jakob</th>
                    <td>D/S</td>


                </tr>
                </tbody>
            </Table>
          </div>
        );
        
    }
}
export default connect(mapStateToProps)(TracksConfirmed);
