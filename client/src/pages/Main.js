import React, { useState } from 'react';
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
import Alert from '../molecules/alert.molecule';

const Main = () => {
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleMessage = (msg, active) => {
    console.log(msg);
    setMessage(msg);
    setIsActive(active);
    setInterval(() => {
      setIsActive(false);
    }, 5000);
  };

  console.log(message);

  return (
    <>
      <Alert message={message} isActive={isActive} />
      <div className='background-main'></div>
      <div className='background-gradient-white'></div>
      <Container>
        <Col>
          <Row>
            <Header />
          </Row>
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
          <Envelope getMessages={handleMessage} />
        </Container>
      </div>
      <div className='guest-book__container'>
        <Container>
          <GuestBook getMessages={handleMessage} />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Main;
