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

        
        // if the poolOfDiver is less than 10 divers
        if (poolOfDivers.length < 9) {
            poolOfDivers.push(this.props.divers.divers.filter(diver => diver.day === false && diver.lead === true)[0]);
            poolOfDivers.push(this.props.divers.divers.filter(diver => diver.day === false && diver.supervisor === true)[0])
        }

        if (poolOfDivers.length < 10) {
            poolOfDivers.push(this.props.divers.divers.filter(diver => diver.day === false && diver.lead === true)[0])
        }
        
        //Handle D/S
            //If Supervisor and lead in the poolOfDivers
            if(poolOfDivers.filter(diver => diver.lead || diver.supervisor).length === 2) {
                // assign D/S to supervisor (don't need to do anything)
                // remove the supervisor from the poolOfDivers
                poolOfDivers.splice(
                    poolOfDivers.findIndex((diver) => diver.supervisor === true),
                    1
                );
            }

            //If only lead is in the poolOfDivers
            if(poolOfDivers.filter(diver => diver.lead || diver.supervisor).length === 1) {
                // assign D/S to lead
                const deckGuy = poolOfDivers.filter(diver => diver.lead === true)[0].surname
                // remove the deckGuy from the poolOfDivers
                poolOfDivers.splice(
                    poolOfDivers.findIndex((diver) => diver.surname === deckGuy),
                    1
                );

            }

            //If no supervisor or lead in the poolOfDivers
            if(poolOfDivers.filter(diver => diver.lead || diver.supervisor).length === 0) {
                // assign D/S to the most wet person
                const deck = poolOfDivers.filter((diver) => diver.deck === true);
                const sortedDeck = deck.sort((a, b) =>
                    a.perCentOfWet > b.perCentOfWet
                    ? 1
                    : a.perCentOfWet === b.perCentOfWet
                    ? a.perCentOfdeck > b.perCentOfdeck
                    ? 1
                    : -1
                    : -1
                );
            }
        
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