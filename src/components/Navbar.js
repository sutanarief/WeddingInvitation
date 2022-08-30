import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

import './component.styles.scss';

const links = ['Home', 'Date', 'Couple', 'Digital Envelope', 'Guest Book'];

const NavigationBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  console.log(scroll);

  return (
    <>
      <div className={`bg-navbar ${scroll ? 'bg-navbar-open' : ''}`}></div>
      <Navbar bg='none' fixed='top'>
        <Container>
          <Navbar.Brand herf='#home' className='wedding--brand'>
            S & P
          </Navbar.Brand>
          <Nav className='ms-auto'>
            {links.map((link, i) => (
              <Nav.Link
                key={i}
                href={`#${link.replace(/\s/g, '').toLowerCase()}`}
                className='mr-3 navbar--links'
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
