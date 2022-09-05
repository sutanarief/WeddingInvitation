import React, { Fragment } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Gallery1 from '../assets/photo-1.JPG';
import Gallery4 from '../assets/photo-4.JPG';
import Gallery5 from '../assets/photo-5.JPG';
import Gallery6 from '../assets/photo-6.JPG';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Gallery = () => {
  return (
    <Fragment>
      <div className='pb-3 gallery-header'>
        <h2 className='text-light'>Galeri</h2>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className='image-wedding-container'>
          <div style={{backgroundImage: `url(${Gallery1})`}} className="image-wedding-container__image" ></div>
        </div>
        <div className='image-wedding-container'>
          <div style={{backgroundImage: `url(${Gallery4})`}} className="image-wedding-container__image" ></div>
        </div>
        <div className='image-wedding-container'>
          <div style={{backgroundImage: `url(${Gallery5})`}} className="image-wedding-container__image" ></div>
        </div>
        <div className='image-wedding-container'>
          <div style={{backgroundImage: `url(${Gallery6})`}} className="image-wedding-container__image" ></div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Gallery;
