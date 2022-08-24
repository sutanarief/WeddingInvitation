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
          <FontAwesomeIcon icon={faQuoteLeft} />
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque sit amet ante eu gravida. Donec eget enim tincidunt
            augue volutpat faucibus in id est. Maecenas mi enim, commodo eget
            sagittis quis, pulvinar a odio. Maecenas efficitur mi sem, sed
            luctus magna congue nec. Suspendisse potenti. Sed interdum leo at
            diam commodo ultricies. Nam posuere nec mi sit amet euismod.
          </i>
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </Col>
      <Col md={6}>
        <div className='person__qoute mt-5'>
        <FontAwesomeIcon icon={faQuoteLeft} />
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque sit amet ante eu gravida. Donec eget enim tincidunt
            augue volutpat faucibus in id est. Maecenas mi enim, commodo eget
            sagittis quis, pulvinar a odio. Maecenas efficitur mi sem, sed
            luctus magna congue nec. Suspendisse potenti. Sed interdum leo at
            diam commodo ultricies. Nam posuere nec mi sit amet euismod.
          </i>
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        <img src={Mempelai} className='person__picture person__picture-2' />
      </Col>
    </Row>
    </Fragment>
  );
};

export default Person;
