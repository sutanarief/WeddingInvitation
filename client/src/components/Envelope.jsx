import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DanaLogo from '../assets/dana.png';
import BCALogo from '../assets/bca.png';

import './component.styles.scss'
import { faMap } from '@fortawesome/free-regular-svg-icons';

const Envelope = () => {
  return (
    <div className='emvelope'>
      <div className='pb-3'>
        <h3>Amplop Digital</h3>
        <p>Bagi yang berkeinginan memberikan kado pernikahan atau tanda kasih, kami juga menyediakan amplop digital pada link di bawah ini.</p>
      </div>
      <Row>
        <Col md={6}>
          <Card className="envelope-card bg-primary text-white pb-3">
            <div className='bank-logo'>
              <img src={BCALogo} />
            </div>
            <div className="bank-info mt-3">
                <h5 className='mb-1'>Nama Lengkap</h5>
                <h5 className='mb-3'>1234567891</h5>
                <button className='btn btn-outline-light'>Salin Nomor Rekening</button>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="envelope-card bg-info text-white pb-3">
            <div className='bank-logo'>
              <img src={DanaLogo} />
            </div>
            <div className="bank-info mt-3">
                <h5 className='mb-1'>Nama Lengkap</h5>
                <h5 className='mb-3'>1234567891</h5>
                <button className='btn btn-outline-light'>Salin Nomor Rekening</button>
            </div>
          </Card>
        </Col>
        <Col md={12}>
        <Card className="bg-white pb-3 mt-3">
            <div className='bank-logo bg-dark'>
              <h4 className='text-light'>
                <FontAwesomeIcon icon={faMap} /> Alamat
              </h4>
            </div>
            <div className="bank-info mt-3">
                <h5 className='mb-1'>Jl. Pendaratan Udang No.10, Pluit, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta</h5>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Envelope;
