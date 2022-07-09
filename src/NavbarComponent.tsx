import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">hiii omg hi. hiiii</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="/button">the big red button lol</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
