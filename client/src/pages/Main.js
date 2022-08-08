import React from 'react';
import Header from '../components/Header';
import Date from '../components/Date';
import Time from '../components/Time';
import { Container, Col, Row } from 'react-bootstrap';

import './main.styles.scss';
import Person from '../components/Person';
import GuestBook from '../components/GuestBook';

const Main = () => {
  return (
    <>
      <div className='background-main'></div>
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
      <div className='guest-book__container'>
        <Container>
          <GuestBook />
        </Container>
      </div>
    </>
  );
};

export default Main;
