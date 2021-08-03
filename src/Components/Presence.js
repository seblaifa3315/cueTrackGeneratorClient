import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';

//importing react-router-dom stuff
import { Link } from "react-router-dom";

//importing react-redux stuff
import { connect } from "react-redux";

//importing base URL
import { baseUrl } from "../shared/baseUrl";

//importing reducers
import { presenceDivers, whoDoesWhat } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        divers: state.divers,
        tracksPersons: state.tracksPersons
    }
}

const mapDispatchToProps = {
    presenceDivers: (diver) => presenceDivers(diver),
    whoDoesWhat: (tracksPersons) => whoDoesWhat(tracksPersons)
}

class RenderPresence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presence: this.props.diver.day? true : false,
        }
        this.handleChange = this.handleChange.bind(this);

    }

handleChange() {
    this.setState({presence: !this.state.presence});
    this.props.presenceDivers(this.props.diver);
}
    render() {
        
        return(
            <FormGroup check>
                <Label>
                    <Input
                        type="checkbox"
                        name="presence"
                        checked = {this.state.presence}
                        onChange={this.handleChange}
                    />
                        {this.props.diver.surname}
                </Label>
            </FormGroup>
        )
    }
}


class Presence extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
        this.handleWhoDoesWhat = this.handleWhoDoesWhat.bind(this);
    }

    handleWhoDoesWhat() {

        //Create an array to store pair surname-track
        const tracksPersons = [];

        //Handle Console
        const presentDivers = this.props.divers.divers.filter(
            (diver) => diver.night === true
        );
        const consol = presentDivers.filter((diver) => diver.console === true);

        const sortedConsole = consol.sort((a, b) =>
            a.numberOfconsole > b.numberOfconsole
                ? 1
                : a.numberOfconsole === b.numberOfconsole
                ? a.numberOfDry > b.numberOfDry
                    ? 1
                    : -1
                : -1
        );

        const consoleGuy = sortedConsole[0].surname;

        let objConsole = { diver: `${consoleGuy}`, track: "C" };
        tracksPersons.push(objConsole);
        
        

        //Remove console guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === consoleGuy),
            1
        );

        //Handle CR
        const cr = presentDivers.filter((diver) => diver.dcr === true);
        const sortedCr = cr.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfdcr > b.numberOfdcr
                    ? 1
                    : -1
                : -1
        );
        const crGuy = sortedCr[0].surname;

        let objCr = { diver: `${crGuy}`, track: "CR" };
        tracksPersons.push(objCr);

        //Remove CR guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === crGuy),
            1
        );

        //Handle CL
        const cl = presentDivers.filter((diver) => diver.dcl === true);
        const sortedCl = cl.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfdcl > b.numberOfdcl
                    ? 1
                    : -1
                : -1
        );
        const clGuy = sortedCl[0].surname;

        let objCl = { diver: `${clGuy}`, track: "CL" };
        tracksPersons.push(objCl);

        //Remove CL guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === clGuy),
            1
        );

        //Handle R1
        const r1 = presentDivers.filter((diver) => diver.r1 === true);
        const sortedR1 = r1.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfr1 > b.numberOfr1
                    ? 1
                    : -1
                : -1
        );
        const r1Guy = sortedR1[0].surname;

        let objR1 = { diver: `${r1Guy}`, track: "R1" };
        tracksPersons.push(objR1);

        //Remove R1 guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === r1Guy),
            1
        );

        //Handle L1
        const l1 = presentDivers.filter((diver) => diver.l1 === true);
        const sortedL1 = l1.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfl1 > b.numberOfl1
                    ? 1
                    : -1
                : -1
        );
        const l1Guy = sortedL1[0].surname;

        let objL1 = { diver: `${l1Guy}`, track: "L1" };
        tracksPersons.push(objL1);

        //Remove L1 guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === l1Guy),
            1
        );

        //Handle R2
        const r2 = presentDivers.filter((diver) => diver.r2 === true);
        const sortedR2 = r2.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfr2 > b.numberOfr2
                    ? 1
                    : -1
                : -1
        );
        const r2Guy = sortedR2[0].surname;

        let objR2 = { diver: `${r2Guy}`, track: "R2" };
        tracksPersons.push(objR2);

        //Remove R2 guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === r2Guy),
            1
        );

        //Handle L2
        const l2 = presentDivers.filter((diver) => diver.l2 === true);
        const sortedL2 = l2.sort((a, b) =>
            a.numberOfWet > b.numberOfWet
                ? 1
                : a.numberOfWet === b.numberOfWet
                ? a.numberOfl2 > b.numberOfl2
                    ? 1
                    : -1
                : -1
        );
        const l2Guy = sortedL2[0].surname;

        let objL2 = { diver: `${l2Guy}`, track: "L2" };
        tracksPersons.push(objL2);

        //Remove L2 guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === l2Guy),
            1
        );

        //Handle FR
        const fr = presentDivers.filter((diver) => diver.fr === true);
        const sortedFr = fr.sort((a, b) =>
            a.numberOffr > b.numberOffr
                ? 1
                : a.numberOffr === b.numberOffr
                ? a.numberOfdeck < b.numberOfdeck
                    ? 1
                    : -1
                : -1
        );
        const frGuy = sortedFr[0].surname;

        let objFr = { diver: `${frGuy}`, track: "FR" };
        tracksPersons.push(objFr);

        //Remove FR guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === frGuy),
            1
        );

        //Handle FL
        const fl = presentDivers.filter((diver) => diver.fl === true);
        const sortedFl = fl.sort((a, b) =>
            a.numberOffl > b.numberOffl
                ? 1
                : a.numberOffl === b.numberOffl
                ? a.numberOfdeck < b.numberOfdeck
                    ? 1
                    : -1
                : -1
        );
        const flGuy = sortedFl[0].surname;

        let objFl = { diver: `${flGuy}`, track: "FL" };
        tracksPersons.push(objFl);

        //Remove FL guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === flGuy),
            1
        );

        //Handle Deck
        const deck = presentDivers.filter((diver) => diver.deck === true);
        const sortedDeck = fl.sort((a, b) =>
            a.numberOfdeck > b.numberOfdeck ? 1 : -1
        );
        const deckGuy = sortedDeck[0].surname;

        let objDeck = { diver: `${deckGuy}`, track: "D/S" };
        tracksPersons.push(objDeck);

        //Remove Deck guy from presentDivers array
        presentDivers.splice(
            presentDivers.findIndex((diver) => diver.surname === deckGuy),
            1
        );


        //Push the divers without tracks into the tracksPersons array
        presentDivers.map((diver) =>
            tracksPersons.push({ diver: `${diver.surname}`, track: "" })
        );

        //Push the day crew to the tracksPersons array
        const dayCrew = this.props.divers.divers.filter(
            (diver) => diver.night === false
        );
        dayCrew.map((diver) =>
            tracksPersons.push({ diver: `${diver.surname}`, track: "" })
        );

        this.props.whoDoesWhat(tracksPersons)
    }


    
    render(){
    //Handle Divers Presence
    const presenceDivers = this.props.divers.divers.map( diver => {
        return (
            <div key={diver.id}>
                <RenderPresence
                    key={diver.id}
                    diver={diver}
                    presenceDivers={this.props.presenceDivers}
                />
            </div>
        );
    });

    
        return (
            <React.Fragment>
                <div className="presence">
                    <div className="listPresence">
                        <Form>
                            <h3>what day</h3>
                            <Input type="date" />
                            <h3>what show</h3>
                            <Input type="date" />
                        </Form>
                        
                        <h3>Who is absent?</h3>
                        <Form>
                            {presenceDivers}
                        </Form>
                        
                    </div>
                </div>
                <div className="listDiversButton">
                    <Link to="presence/tracksProposal">
                        <Button
                        onClick={this.handleWhoDoesWhat}
                        >
                            Confirm
                        </Button>
                    </Link>
                </div>
                
                
            </React.Fragment>
        )
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Presence);