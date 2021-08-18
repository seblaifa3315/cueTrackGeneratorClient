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

//start

//end

        // Create a pool of diver without day, lead or supervisor
        const poolOfDivers = this.props.divers.divers.filter(
            (diver) => diver.day === false && diver.supervisor === false && diver.lead === false
        );
        
        //Handle D/S
            let deckGuy;
            let objDeck;
            //If poolOfDivers is 9 add assign D/S to the lead night
            if(poolOfDivers.length === 9) {
                //check if lead is present
                const lead = this.props.divers.divers.filter((diver) => diver.day === false  && diver.lead === true);
                if(lead.length > 0) {
                    deckGuy = lead[0].surname
                    objDeck = { diver: `${deckGuy}`, track: "D/S" };
                    tracksPersons.push(objDeck);
                    console.log(`D/S: ${deckGuy}`);
                }
            //If at least 10 divers in the poolOfDivers assign D/S to the most wet
            } else if (poolOfDivers.length > 9) {
                const deck = poolOfDivers.filter((diver) => diver.deck === true);
                const sortedDeck = deck.sort((a, b) =>
                a.perCentOfDry > b.perCentOfDry
                ? 1
                : a.perCentOfDry === b.perCentOfDry
                ? a.perCentOfdeck > b.perCentOfdeck
                ? 1
                : -1
                : -1);
                deckGuy = sortedDeck[0].surname;
                objDeck = { diver: `${deckGuy}`, track: "D/S" };
                tracksPersons.push(objDeck);
                console.log(`D/S: ${deckGuy}`);
                // remove the deckGuy from the poolOfDivers
                poolOfDivers.splice(
                    poolOfDivers.findIndex((diver) => diver.surname === deckGuy),
                    1
                );
                console.log("after removing deckGuy:")
                console.log(poolOfDivers)
            }
            console.log("tracksPersons Array:")
            console.log(tracksPersons.map(el => el.surname));
                
            
            
        //Handle FL
        const fl = poolOfDivers.filter((diver) => diver.fl === true);
        const sortedFl = fl.sort((a, b) =>
                a.perCentOfDry > b.perCentOfDry
                ? 1
                : a.perCentOfDry === b.perCentOfDry
                ? a.perCentOffl > b.perCentOffl
                ? 1
                : -1
                : -1);

        const flGuy = sortedFl[0].surname;
        const objFl = { diver: `${flGuy}`, track: "FL" };
        tracksPersons.push(objFl);
        console.log(`FL: ${flGuy}`);
                // remove the deckGuy from the poolOfDivers
                poolOfDivers.splice(
                    poolOfDivers.findIndex((diver) => diver.surname === flGuy),
                    1
                );
                console.log("after removing flGuy:")
                console.log(poolOfDivers.map(el => el.surname))

        //Handle FR
        const fr = poolOfDivers.filter((diver) => diver.fr === true);
        const sortedFr = fr.sort((a, b) =>
                a.perCentOfDry > b.perCentOfDry
                ? 1
                : a.perCentOfDry === b.perCentOfDry
                ? a.perCentOffr > b.perCentOffr
                ? 1
                : -1
                : -1);

        const frGuy = sortedFr[0].surname;
        const objFr = { diver: `${frGuy}`, track: "FR" };
        tracksPersons.push(objFr);
        console.log(`FR: ${frGuy}`);
                // remove the deckGuy from the poolOfDivers
                poolOfDivers.splice(
                    poolOfDivers.findIndex((diver) => diver.surname === frGuy),
                    1
                );
                console.log("after removing frGuy:")
                console.log(poolOfDivers.map(el => el.surname))

        
        
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