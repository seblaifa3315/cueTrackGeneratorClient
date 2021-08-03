import React, { useState } from "react";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';




const NavComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => setIsOpen(!isOpen);
  
    return (
        <React.Fragment>
        <Navbar dark sticky="top" expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    <img src="./assets/logoPoseidon.jpg" className="logoNav" width="30" />
                    Aquatics
                </NavbarBrand>

                {/* <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="myNav">
                        <NavItem className="myNavItem">
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="myNavItem">
                            <NavLink className="nav-link" to="/shop">
                                Shop
                            </NavLink>
                        </NavItem>
                        <NavItem className="myNavItem">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem className="myNavItem">
                            <NavLink
                                className="nav-link"
                                to="/contactus"
                            >
                                Contact us
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse> */}
            </div>
        </Navbar>
    </React.Fragment>
    );
  }
  
  export default NavComponent;
