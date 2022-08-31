import React from 'react';
import { useState } from 'react';

const Welcome = ({ playMusic }) => {
  const params = new URLSearchParams(window.location.search);

  const [open, setOpen] = useState(false);
  const [guest] = useState(params.get('guest') || '');

  const handleOpen = () => {
    playMusic();
    setOpen(!open);
  };

  return (
    <div className={`welcome text-white ${open ? 'open' : ''}`}>
      <h1>Undangan Pernikahan</h1>
      {guest && (
        <div className='to'>
          <span>Kepada </span>
          <span>{guest}</span>
        </div>
      )}
      <p>
        Tanpa Mengurangi Rasa Hormat Kami Mengundang Anda Untuk Berhadir Di
        Acara Pernikahan Kami.
      </p>
      <div className='mt-5'>
        <button className='btn btn-light' onClick={() => handleOpen()}>
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default Welcome;
