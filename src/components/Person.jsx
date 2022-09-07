import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Rings from '../assets/wedding-rings.png';
import MempelaiWanita from '../assets/photo-output-tiwi.jpg';
import MempelaiPria from '../assets/photo-3.JPG';

const Person = () => {
  return (
    <Fragment>
      <div className='person-header'>
        <h2>
          <img src={Rings} /> Mempelai
        </h2>
        <p>
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah yang Maha Pengasih, dengan ridho-Mu Kau mempertemukan kami
          dalam suatu ikatan pernikahan suci.
        </p>
      </div>
      <Row className='px-5'>
        <Col md={6}>
          <div
            style={{ backgroundImage: `url(${MempelaiWanita})` }}
            className='person__picture'
          >
            <div className='person__qoute'>
              <h4>Pratiwi Rudiansyah A.Md.A.B</h4>
              <p>
                Putri Pertama dari Bpk Rudy Hartono dan Ibu Partinah Landjar
              </p>
            </div>
          </div>
          <div className='person__qoute-mobile mb-4'>
            <h4>Pratiwi Rudiansyah A.Md.A.B</h4>
            <p>Putri Pertama dari Bpk Rudy Hartono dan Ibu Partinah Landjar</p>
          </div>
        </Col>
        <Col md={6}>
          <div
            style={{ backgroundImage: `url(${MempelaiPria})` }}
            className='person__picture'
          >
            <div className='person__qoute'>
              <h4>Muhammad Shohib</h4>
              <p>
                Putra Terakhir dari Alm. Bpk H. Ngateman dan Ibu Hj.
                Zuchrotin
              </p>
            </div>
          </div>
          <div className='person__qoute-mobile'>
            <h4>Muhammad Shohib</h4>
            <p>
              Putra Terakhir dari Alm. Bpk H. Ngateman dan Ibu Hj. Zuchrotin
            </p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Person;
