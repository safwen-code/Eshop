import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = (props) => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Eshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"> Card</Nav.Link>
              <Nav.Link href="/login">Sing In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
