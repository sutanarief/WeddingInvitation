import React from 'react';

const Messages = ({ dataMessages }) => {
  return (
    <div>
      {dataMessages?.map((data, index) => (
        <div key={index}>
          <div className='message-name'>
            <h6>{data.name}</h6>
          </div>
          <div>
            <p>{data.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
