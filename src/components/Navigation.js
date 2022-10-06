import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";


const Navigation = () => {
  return (
    <Row className="header">
      <Col sm={{ span: 1, offset: 9 }}>
        <Navbar expand="lg" className="my-2">
          <Container className="links">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <NavLink
                  to="/"
                  className="nav-link"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/units"
                  className="nav-link"
                >
                  Units
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};
export default Navigation;