import React, { Component } from "react";

//importing react-redux stuff
import { connect } from "react-redux";

//importing reactstrap stuff
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

//importing react-router-dom stuff
import { Link } from "react-router-dom";


//importing reducers
import { updateTracksPersonsArrayFromStore, updateDiversStat } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        divers: state.divers,
        tracksPersons: state.tracksPersons,
    };
};

const mapDispatchToProps = {
    updateTracksPersonsArrayFromStore: (diver, newValue) =>
        updateTracksPersonsArrayFromStore(diver, newValue),
        updateDiversStat: (newData) => updateDiversStat(newData)
};

class TracksProposal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.hasDuplicate = this.hasDuplicate.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleChange(e) {
        const newValue = e.target.value;
        console.log(newValue);
        const diver = e.target.name;
        console.log(diver);
        this.props.updateTracksPersonsArrayFromStore(diver, newValue);
    }

    handleOnClick() {
        const isThereADuplicate = this.hasDuplicate();
        console.log(`is there a duplicate: ${isThereADuplicate}`);
        if(isThereADuplicate) {
            this.toggle();
        }
        this.props.divers.divers.map((diver) => {
            //Find the index of this diver in the array tracksPersons that is in the store
            const i = this.props.tracksPersons.tracksPersons.findIndex(
                (pair) => pair.diver === diver.surname
            );

            //Determine the track at this index(which is the track of this diver)
            const theTrack = this.props.tracksPersons.tracksPersons[i].track

            // Change data depending on the track in the input box
            if(theTrack !== "") {
                switch (theTrack) {
                    case "D/S":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOfdeck += 1;
                        break;
                    case "C":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOfconsole += 1;
                        break;
                
                    case "CR":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfdcr += 1;
                        break;
                    case "R1":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfr1 += 1;
                        break;
                    case "R2":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfr2 += 1;
                        break;
                    
                    case "CL":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfdcl += 1;
                        break;
                    case "L1":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfl1 += 1;
                        break;
                    case "L2":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfl2 += 1;
                        break;
                    case "FR":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOffr += 1;
                        break;
                    case "FL":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOffl += 1;
                        break;
                    case "FC":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOfconsole += 1;
                        break;
                    case "FCR":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfdcr += 1;
                        break;
                    case "FR2":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfr2 += 1;
                        break;
                    case "FR1":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfr1 += 1;
                        break;
                    case "FCL":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfdcl += 1;
                        break;
                    case "FL2":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfl2 += 1;
                        break;
                    case "FL1":
                        diver.numberOfShow += 1;
                        diver.numberOfWet += 1;
                        diver.numberOfl1 += 1;
                        break;
                    case "FFR":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOffr += 1;
                        break;
                    case "FFR":
                        diver.numberOfShow += 1;
                        diver.numberOfDry += 1;
                        diver.numberOffl += 1;
                        break;
                }
            }

            diver.perCentOfWet = diver.numberOfWet / diver.numberOfShow;
            diver.perCentOfDry = diver.numberOfDry / diver.numberOfShow;
            diver.perCentOfconsole = diver.numberOfconsole / diver.numberOfShow;
            diver.perCentOfdcr = diver.numberOfdcr / diver.numberOfShow;
            diver.perCentOfr1 = diver.numberOfr1 / diver.numberOfShow;
            diver.perCentOfr2 = diver.numberOfr2 / diver.numberOfShow;
            diver.perCentOfdcl = diver.numberOfdcl / diver.numberOfShow;
            diver.perCentOfl1 = diver.numberOfl1 / diver.numberOfShow;
            diver.perCentOfl2 = diver.numberOfl2 / diver.numberOfShow;
            diver.perCentOffr = diver.numberOffr / diver.numberOfShow;
            diver.perCentOffl = diver.numberOffl / diver.numberOfShow;
            diver.perCentOfdeck = diver.numberOfdeck / diver.numberOfShow;

            // Create an object diver to give to fetch with new data
            const newData = {
                "_id": diver._id,
                "firstName": diver.firstName,
                "lastName": diver.lastName,
                "surname": diver.surname,
                "supervisor": diver.supervisor,
                "lead": diver.lead,
                "day": diver.day,
                "night": diver.night,
                "hiringYear": diver.hiringYear,
                "presence": diver.presence,
                "canDive": diver.canDive,
                "console": diver.console,
                "dcr": diver.dcr,
                "r1": diver.r1,
                "r2": diver.r2,
                "dcl": diver.dcl,
                "l1": diver.l1,
                "l2": diver.l2,
                "fr": diver.fr,
                "fl": diver.fl,
                "deck": diver.deck,
                "numberOfWet": diver.numberOfWet,
                "numberOfDry": diver.numberOfDry,
                "numberOfShow": diver.numberOfShow,
                "numberOfconsole": diver.numberOfconsole,
                "numberOfdcr": diver.numberOfdcr,
                "numberOfr1": diver.numberOfr1,
                "numberOfr2": diver.numberOfr2,
                "numberOfdcl": diver.numberOfdcl,
                "numberOfl1": diver.numberOfl1,
                "numberOfl2": diver.numberOfl2,
                "numberOffr": diver.numberOffr,
                "numberOffl": diver.numberOffl,
                "numberOfdeck": diver.numberOfdeck,
                "perCentOfWet": diver.perCentOfWet,
                "perCentOfDry": diver.perCentOfDry,
                "perCentOfShow": diver.perCentOfShow,
                "perCentOfconsole": diver.perCentOfconsole,
                "perCentOfdcr": diver.perCentOfdcr,
                "perCentOfr1": diver.perCentOfr1,
                "perCentOfr2": diver.perCentOfr2,
                "perCentOfdcl": diver.perCentOfdcl,
                "perCentOfl1": diver.perCentOfl1,
                "perCentOfl2": diver.perCentOfl2,
                "perCentOffr": diver.perCentOffr,
                "perCentOffl": diver.perCentOffl,
                "perCentOfdeck": diver.perCentOfdeck,
                "tracksKnown": diver.tracksKnown,
                "tracksUnknown": diver.tracksUnknown
            }

            this.props.updateDiversStat(newData);
        })
    }

    hasDuplicate() {
        const onlyTracks = this.props.tracksPersons.tracksPersons.map(
            (pair) => pair.track
        );
        const withoutNoTrack = onlyTracks.filter((track) => track !== "");
        return withoutNoTrack.length !== new Set(withoutNoTrack).size;
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        // All divers list
        const allDiversList = this.props.divers.divers.map((diver) => (
            <p key={diver.id}>{diver.surname}</p>
        ));

        //Create a full column of track assigned to each corresponding diver
        const trackAssigned = this.props.divers.divers.map((diver) => {
            const index = this.props.tracksPersons.tracksPersons.findIndex(
                (person) => person.diver === diver.surname
            );
            const tracksPersonsCopy = [
                ...this.props.tracksPersons.tracksPersons,
            ];
            const pair = tracksPersonsCopy[index];
            const track = pair.track;

            //create list of option with only the tracks known by the diver and remove from the array the track assigned to the diver
            const tracksKnown = diver.tracksKnown;
            // if(tracksKnown.includes(track)) {
            //     tracksKnown.splice(tracksKnown.findIndex(el => el === track), 1)
            // }
            const finalTracksKnown = tracksKnown.map((cueTrack, index) => (
                <option key={index} value={cueTrack}>
                    {cueTrack}
                </option>
            ));

            //create list of option with only the tracks unknown by the diver and remove from the array the track assigned to the diver
            const tracksUnknown = diver.tracksUnknown;
            // if(tracksUnknown.includes(track)) {
            //     tracksUnknown.splice(tracksUnknown.findIndex(el => el === track), 1)
            // }
            const finalTracksUnknown = tracksUnknown.map((cueTrack, index) => (
                <option key={index} value={cueTrack}>
                    {cueTrack}
                </option>
            ));


            return (
                <FormGroup key={diver.id} row className="tracksProposalItem">
                    <Col sm={12}>
                        <Input
                            type="select"
                            id={diver}
                            name={diver.surname}
                            onChange={this.handleChange}
                        >
                            <option value={track}>{track}</option>
                            {finalTracksKnown}
                            {finalTracksUnknown}
                        </Input>
                    </Col>
                </FormGroup>
            );
        });

        console.log(this.props.tracksPersons.tracksPersons);
        
        let to;
        if(this.hasDuplicate()) {
            to = "/presence/tracksProposal"
        } else {
            to= "/presence/tracksProposal/TracksConfirmed"
        }

        //Component return
        return (
            <div className="tracksProposalContainer">
                <h2 className="tracksProposalTitle">Cue Track Proposal</h2>

                <Form>
                    <div className="row ola">
                        <Col sm={1} className="col">
                            {allDiversList}
                        </Col>
                        <Col sm={1} className="col">
                            {trackAssigned}
                        </Col>
                    </div>

                    <Link to={to}>
                        <Button
                            className="tracksConfirmed"
                            onClick={this.handleOnClick}
                        >
                            Submit
                        </Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                                Warning!!!
                            </ModalHeader>
                            <ModalBody>
                                The same track has been assign to multiple divers. Do
                                you wish to proceed?
                            </ModalBody>
                            <ModalFooter>
                                <Link to="/presence/tracksProposal/TracksConfirmed">
                                    <Button color="primary" onClick={this.handleOnClick}>
                                    YES
                                    </Button>{" "}
                                </Link>
                                <Button color="secondary" onClick={this.toggle}>
                                    NO
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </Link>
                </Form>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TracksProposal);
