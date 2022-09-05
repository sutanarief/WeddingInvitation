import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Rings from '../assets/wedding-rings.png'
import Mempelai from '../assets/background.jpg'

const Person = () => {
  return (
    <Fragment>
      <div className='person-header'>
        <h2><img src={Rings} /> Mempelai</h2>
        <p>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah yang Maha Pengasih, dengan ridho-Mu Kau mempertemukan kami dalam suatu ikatan pernikahan suci.</p>
      </div>
    <Row className="px-5">
      <Col md={6}>
        <img src={Mempelai} className='person__picture person__picture-1' />
        <div className='person__qoute person__qoute-1'>
          <h4>Pratiwi Rudiansyah A.Md.A.B</h4>
          <p>Putri Pertama dari Bpk Rudy Hartono dan Ibu Partinah Landjar</p>
        </div>
      </Col>
      <Col md={6}>
        <div className='person__qoute mt-5'>
          <h4>Muhammad Shohib</h4>
          <p>Putra ke Terakhir dari Alm. Bph H. Ngateman dan Ibu Hj. Zuchrotin</p>
        </div>
        <img src={Mempelai} className='person__picture person__picture-2' />
      </Col>
    </Row>
    </Fragment>
  );
};

export default Person;
