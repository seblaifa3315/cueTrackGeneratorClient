import React from 'react'

//importing react stuff
import { Button } from 'reactstrap';

//importing react-router-dom stuff
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h5 className="slogan">Welcome to the Cue Track Generator for 'O' Aquatics</h5>
            <Link to={'/presence'}>
                <Button>Get Started</Button>
            </Link>
        </div>
    )
}
