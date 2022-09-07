import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DanaLogo from '../assets/dana.png';
import BCALogo from '../assets/bca.png';
import DanaIcon from '../assets/danaa.png'

import './component.styles.scss'
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Envelope = ({getMessages}) => {

  const [state] = useState({
    bca: '2440138457',
    dana: '087755771582'
  });

  const urlDana = () => {
    window.open('https://link.dana.id/a/key_live_maIkM32pF0ULJer3wXep0aihxukdG5Sq?%24identity_id=1019895005052840563&alias=qr/3ohqlbj&source=ios&data=eyIkb2dfZGVzY3JpcHRpb24iOiJUcmFuc2ZlciB1YW5nIHBha2FpIEtpcmltIERBTkEgamFkaSBsZWJpaCBtdWRhaC4gS2xpayBkaSBzaW5pLiIsIiRvZ19pbWFnZV91cmwiOiJodHRwOi8vYS5tLmRhbmEuaWQvcmVzb3VyY2UvaW1ncy9za3l3YWxrZXIvZGVlcGxpbmtwcmV2aWV3L3Byb2ZpbGVfcXIucG5nIiwiJGxvY2FsbHlfaW5kZXhhYmxlIjp0cnVlLCIkb2dfdGl0bGUiOiJDYXJhIGJhcnUga2lyaW0gdWFuZyIsIiRwdWJsaWNseV9pbmRleGFibGUiOnRydWUsInBhdGgiOiJkZWNvZGUiLCJmdWxsX3VybCI6Imh0dHBzOi8vcXIuZGFuYS5pZC92MS8yODEwMTIwMTIyMDE4MTIxODQyMDYxNjM0IiwiciI6ImJ6SGl2RiIsIiRjYW5vbmljYWxfaWRlbnRpZmllciI6InRlbWFuLzIxNjYxMDAwMDAwNjE4MTU4MTQxNSJ9', '_blank')
  }

  const [alamat] = useState('Jl. Pendaratan Udang No.10, Pluit, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta')

  const copyToClipboard = (noRek, message) => {
    navigator.clipboard.writeText(noRek).then(result => {
      getMessages(message, true)
    });
  }

  return (
    <div className="emvelope">
      <div className="pb-3">
        <h3>Amplop Digital</h3>
        <p>
          Bagi yang berkeinginan memberikan kado pernikahan atau tanda kasih,
          kami juga menyediakan amplop digital pada link di bawah ini.
        </p>
      </div>
      <Row>
        <Col md={6} sm={12}>
          <Card className="envelope-card bg-primary text-white pb-3 mb-2">
            <div className="bank-logo">
              <img src={BCALogo} />
            </div>
            <div className="bank-info mt-3">
              <h5 className="mb-1">Pratiwi Rudiansyah</h5>
              <h5 className="mb-3">{state.bca}</h5>
              <button
                className="btn btn-outline-light"
                onClick={() =>
                  copyToClipboard(state.bca, "No rekening telah disalin")
                }
              >
                <FontAwesomeIcon icon={faCopy} /> Salin Nomor Rekening
              </button>
            </div>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card className="envelope-card bg-info text-white pb-3">
            <div className="bank-logo">
              <img src={DanaLogo} />
            </div>
            <div className="bank-info mt-3">
              <h5 className="mb-1">Pratiwi Rudiansyah</h5>
              <h5 className="mb-3">{state.dana}</h5>
              <Col>
                <button
                  className="btn btn-outline-light"
                  onClick={() =>
                    copyToClipboard(state.dana, "No dana telah disalin")
                  }
                >
                  <FontAwesomeIcon icon={faCopy} /> Salin Nomor Dana
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={() => urlDana()}
                >
                  <img src={DanaIcon} style={{width: '15px', height: '15px', borderRadius: '5px', marginBottom: '2px'}} /> Buka Dana
                </button>
              </Col>
            </div>
          </Card>
        </Col>
        <Col md={12}>
          <Card className="bg-white pb-3 mt-3">
            <div className="bank-logo bg-dark">
              <h4 className="text-light">
                <FontAwesomeIcon icon={faMap} /> Alamat
              </h4>
            </div>
            <div className="bank-info mt-3">
              <h5 className="mb-1">{alamat}</h5>
              <button
                className="btn btn-outline-dark mt-3"
                onClick={() => copyToClipboard(alamat, "Alamat telah disalin")}
              >
                <FontAwesomeIcon icon={faCopy} /> Salin Alamat
              </button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Envelope;
