import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

const Person = () => {
  return (
    <Row className="px-5">
      <Col md={6}>
        <div className='person__picture person__picture-1'></div>
        <div className='person__qoute person__qoute-1'>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque sit amet ante eu gravida. Donec eget enim tincidunt
            augue volutpat faucibus in id est. Maecenas mi enim, commodo eget
            sagittis quis, pulvinar a odio. Maecenas efficitur mi sem, sed
            luctus magna congue nec. Suspendisse potenti. Sed interdum leo at
            diam commodo ultricies. Nam posuere nec mi sit amet euismod.
          </i>
        </div>
      </Col>
      <Col md={6}>
        <div className='person__qoute mt-5'>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pellentesque sit amet ante eu gravida. Donec eget enim tincidunt
            augue volutpat faucibus in id est. Maecenas mi enim, commodo eget
            sagittis quis, pulvinar a odio. Maecenas efficitur mi sem, sed
            luctus magna congue nec. Suspendisse potenti. Sed interdum leo at
            diam commodo ultricies. Nam posuere nec mi sit amet euismod.
          </i>
        </div>
        <div className='person__picture person__picture-2'></div>
      </Col>
    </Row>
  );
};

export default Person;
