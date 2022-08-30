import {
  faBook,
  faCalendar,
  faEnvelope,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

import './component.styles.scss';

const links = [
  { icon: faCalendar, name: 'Date' },
  { icon: faHeart, name: 'Couple' },
  { icon: '', name: 'Home' },
  { icon: faEnvelope, name: 'Digital Envelope' },
  { icon: faBook, name: 'Guest Book' },
];

const MobileNav = () => {
  return (
    <>
      <div className='bg-navbar'></div>
      <Navbar bg='white' fixed='bottom' className="mobile-nav">
        <Container>
          <Nav className='m-auto'>
            {links.map((link, i) => (
              <Nav.Link
                key={i}
                href={`#${link.name.replace(/\s/g, '').toLowerCase()}`}
                className='mr-3 navbar--links'
              >
                {link.icon == '' ? (
                  <div className='wedding-brand-mobile'>
                    <h3>S&P</h3>
                  </div>
                ) : (
                  <FontAwesomeIcon icon={link.icon} className="icon-mobile" />
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileNav;
