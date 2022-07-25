import React from 'react'
import Header from '../components/Header'
import Date from '../components/Date'
import {
  Container,
  Col,
  Row
} from 'react-bootstrap'

const Main = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Col>
        <Row>
          <Header />
        </Row>
        <Container className="d-flex justify-content-center">
          <Date/>
        </Container>
      </Col>
    </Container>
  )
}

export default Main