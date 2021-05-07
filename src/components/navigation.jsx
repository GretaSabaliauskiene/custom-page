import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import StyledDive from "./StyledDiv";

class Navigation extends Component {
  render() {
    return (
      <StyledDive>
        <div className="container">
          <Navbar collapseOnSelect expand="lg" className="p-3" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Pagrindinis puslapis</Nav.Link>
                <NavDropdown
                  title="Teikiamos paslaugos"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Muitinės tarpininkas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Intrastato ataskaitos
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#wwhome">Pasirašyti sutartį</Nav.Link>
                <Nav.Link href="#qhome">Apie mus</Nav.Link>
                <Nav.Link href="#hdome">Kontaktai</Nav.Link>{" "}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </StyledDive>
    );
  }
}

export default Navigation;
