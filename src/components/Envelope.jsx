import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DanaLogo from '../assets/dana.png';
import BCALogo from '../assets/bca.png';

import './component.styles.scss'
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Envelope = ({getMessages}) => {

  const [state] = useState({
    bca: '123123123123',
    dana: '090098990890'
  });

  const [alamat] = useState('Jl. Pendaratan Udang No.10, Pluit, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta')

  const copyToClipboard = (noRek) => {
    navigator.clipboard.writeText(noRek).then(result => {
      getMessages('No rekening telah disalin', true)
    });
  }

  return (
    <div className='emvelope'>
      <div className='pb-3'>
        <h3>Amplop Digital</h3>
        <p>Bagi yang berkeinginan memberikan kado pernikahan atau tanda kasih, kami juga menyediakan amplop digital pada link di bawah ini.</p>
      </div>
      <Row>
        <Col md={6} sm={12}>
          <Card className="envelope-card bg-primary text-white pb-3 mb-2">
            <div className='bank-logo'>
              <img src={BCALogo} />
            </div>
            <div className="bank-info mt-3">
                <h5 className='mb-1'>Nama Lengkap</h5>
                <h5 className='mb-3'>{state.bca}</h5>
                <button className='btn btn-outline-light' onClick={() => copyToClipboard(state.bca)}><FontAwesomeIcon icon={faCopy} /> Salin Nomor Rekening</button>
            </div>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card className="envelope-card bg-info text-white pb-3">
            <div className='bank-logo'>
              <img src={DanaLogo} />
            </div>
            <div className="bank-info mt-3">
                <h5 className='mb-1'>Nama Lengkap</h5>
                <h5 className='mb-3'>{state.dana}</h5>
                <button className='btn btn-outline-light' onClick={() => copyToClipboard(state.dana)}><FontAwesomeIcon icon={faCopy} /> Salin Nomor Rekening</button>
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
                <h5 className='mb-1'>{alamat}</h5>
                <button className='btn btn-outline-dark mt-3' onClick={() => copyToClipboard(state.dana)}><FontAwesomeIcon icon={faCopy} /> Salin Alamat</button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Envelope;
