import React from 'react'
import {
  Container,
  Col
} from 'react-bootstrap'


const style = {
  fontWeight: "1000",
  fontSize: "100px"
}

const styleWed = {
  fontWeight: '400',
  fontSize: '30px',
  borderBottom: "1px black solid", 
  display: "inline"
}

const divStyle = {
  width: '200px',
  height: '2px',
  backgroundColor: 'red'
}

const Header = () => {
  return (
    <>
      <Container style={{height: '80vh'}} className="d-flex align-items-center justify-content-center">
        <Col className="wedding">
          <Col style={style}>
            Shohib & Pratiwi
          </Col>
          <Col style={styleWed}>
            Wedding Invitation
          </Col>
        </Col>
      </Container>
    </>
  )
}

export default Header