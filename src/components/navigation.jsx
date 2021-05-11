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
          <Navbar collapseOnSelect expand="lg" className="p-4" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Pagrindinis puslapis</Nav.Link>
                <NavDropdown
                  title="Teikiamos paslaugos"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/muitines-tarpininkas">
                    Muitinės tarpininkas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/intrastato-ataskaitos">
                    Intrastato ataskaitos
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/pasirasyti-sutarti">
                  Pasirašyti sutartį
                </Nav.Link>
                <Nav.Link href="/skaiciuokle">Skaičiuoklė</Nav.Link>
                <Nav.Link href="/apie-mus">Apie mus</Nav.Link>
                <Nav.Link href="/susisiekite-kontaktai">Kontaktai</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </StyledDive>
    );
  }
}

export default Navigation;
