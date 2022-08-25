import React from 'react';
import { Container, Col } from 'react-bootstrap';

const style = {
  fontWeight: '1000',
  color: '#2c0500',
  opacity: '0.8',
};

const styleWed = {
  fontWeight: '700',
  fontSize: '30px',
  borderBottom: '1px black solid',
  color: '#2c0500',
};

const divStyle = {
  width: '200px',
  height: '2px',
  backgroundColor: 'rgba(225,225,225, .8)',
};

const Header = () => {
  return (
    <>
      <Container className='d-flex align-items-center justify-content-center home'>
        <div className='wedding'>
          <div className='wedding--name-box'>
            <h1 style={style} className='wedding--name'>
              Shohib & Pratiwi
            </h1>
          </div>
          <div style={styleWed} className='wedding--invite'>
            Wedding Invitation
          </div>
          <div className='circle-date'>
            <div className='date-text'>Save the date</div>
            <div className='date'>18 September 2022</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
