import React, { Fragment } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
          <img src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' />
        </div>
        <div className='image-wedding-container'>
          <img src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' />
        </div>
        <div className='image-wedding-container'>
          <img src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' />
        </div>
        <div className='image-wedding-container'>
          <img src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' />
        </div>
        <div className='image-wedding-container'>
          <img src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' />
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Gallery;
