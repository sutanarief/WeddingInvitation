import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  Row,
} from 'react-bootstrap'

const links = ['Home', 'Waktu & Tempat', 'Buku Tamu']

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="none">
        <Container className="d-flex">
          <Row md={8}>
            <Navbar.Brand herf="#home" className="wedding" style={{fontWeight: '800'}}>S & P</Navbar.Brand>
          </Row>
          <Row>
            <Nav className="me-auto">
              {links.map((link, i) => <Nav.Link key={i} href={`#${link.replace(/\s/g, '').toLowerCase()}`} className="mr-3">{link}</Nav.Link>)}
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar