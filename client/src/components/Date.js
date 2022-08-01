import React from 'react';

const style = {
  width: '300px',
  height: '300px',
  backgroundColor: 'rgba(255,255,255,0.5)',
  borderRadius: '50%',
  boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.1)',
  paddingTop: '60px',
};

const Date = () => {
  return (
    <div style={style}>
      <div className='date-text'>Save the date</div>
      <div className='date'>18 September 2022</div>
    </div>
  );
};

export default Date;
