import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Date from '../components/Date';
import Time from '../components/Time';
import { Container, Col, Row, Button } from 'react-bootstrap';

import './main.styles.scss';
import Person from '../components/Person';
import GuestBook from '../components/GuestBook';
import Gallery from '../components/Gallery';
import Envelope from '../components/Envelope';
import Footer from '../components/Footer';
import Alert from '../molecules/alert.molecule';
import { useAudio } from '../utils/functions';
import Monolog from '../assets/Monolog.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Welcome from '../components/Welcome';

const Main = () => {
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);

  const [audio] = useState(new Audio(Monolog));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    setInterval(() => {
      setIsActive(false);
    }, 5000);
  }, [message]);

  const handleMessage = (msg, active) => {
    if (message || isActive) {
      setMessage('');
      setIsActive(false);
    }
    setMessage(msg);
    setIsActive(active);
  };

  const playMusic = () => {
    setPlaying(true);
  };

  return (
    <>
      <Welcome playMusic={playMusic} />
      <Alert message={message} isActive={isActive} />
      <div className='background-main'></div>
      <div className='background-gradient-white'></div>
      <Container id='home'>
        <Col>
          <Row>
            <Header />
          </Row>
        </Col>
      </Container>

      <div className='background-time__container' id='date'>
        <div className='background-time'>
          <Container>
            <Time />
          </Container>
        </div>
      </div>
      <div className='person__container' id='couple'>
        <Container>
          <Person />
        </Container>
      </div>
      <div className='gallery__container p-3'>
        <Container fluid>
          <Gallery />
        </Container>
      </div>
      <div className='bank__container' id='digitalenvelope'>
        <Container>
          <Envelope getMessages={handleMessage} />
        </Container>
      </div>
      <div className='guest-book__container' id='guestbook'>
        <Container>
          <GuestBook getMessages={handleMessage} />
        </Container>
      </div>
      <Footer />
      <div onClick={() => setPlaying(!playing)} className='btn-play'>
        {playing ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </div>
    </>
  );
};

export default Main;
