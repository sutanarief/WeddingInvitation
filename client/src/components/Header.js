import React from 'react';
import { Container, Col } from 'react-bootstrap';

const style = {
  fontWeight: '1000',
  fontSize: '100px',
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
      <Container
        style={{ height: '60vh' }}
        className='d-flex align-items-center justify-content-center'
      >
        <Col className='wedding'>
          <div className='wedding--name-box'>
            <Col style={style} className='wedding--name'>
              Shohib & Pratiwi
            </Col>
          </div>
          <Col style={styleWed} className='wedding--invite'>
            Wedding Invitation
          </Col>
        </Col>
      </Container>
    </>
  );
};

export default Header;
