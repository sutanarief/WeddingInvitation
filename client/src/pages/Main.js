import React from 'react';
import Header from '../components/Header';
import Date from '../components/Date';
import Time from '../components/Time';
import { Container, Col, Row } from 'react-bootstrap';

import './main.styles.scss';
import Person from '../components/Person';
import GuestBook from '../components/GuestBook';
import Gallery from '../components/Gallery';
import Envelope from '../components/Envelope';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <>
      <div className='background-main'></div>
      <div className='background-gradient-white'></div>
      <Container>
        <Col>
          <Row>
            <Header />
          </Row>
          <Container className='d-flex justify-content-center'>
            <Date />
          </Container>
        </Col>
      </Container>

      <div className='background-time__container'>
        <div className='background-time'>
          <Container>
            <Time />
          </Container>
        </div>
      </div>
      <div className='person__container'>
        <Container>
          <Person />
        </Container>
      </div>
      <div className='gallery__container p-3'>
        <Container fluid>
          <Gallery />
        </Container>
      </div>
      <div className='bank__container'>
        <Container>
          <Envelope />
        </Container>
      </div>
      <div className='guest-book__container'>
        <Container>
          <GuestBook />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Main;
