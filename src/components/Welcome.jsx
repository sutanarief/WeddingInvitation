import React from 'react';
import { useState } from 'react';
import { Border } from '../assets';

import Love from '../assets/love-logo.png'

const Welcome = ({ playMusic }) => {
  const params = new URLSearchParams(window.location.search);

  const [open, setOpen] = useState(false);
  const [guest] = useState(params.get('guest') || '');

  const handleOpen = () => {
    playMusic();
    setOpen(!open);
  };

  return (
    <div className={`welcome text-white ${open ? "open" : ""}`}>
      <h1>Undangan Pernikahan</h1>
      <img src={Love} className="welcome__love-logo" alt="Love" />
      {guest && (
        <div className="to">
          <span>Kepada Yth.</span>
          <span className='name-to'>{guest}</span>
        </div>
      )}
      <div className={guest ? 'mt-3' : 'mt-5'}>
        <button className="btn btn-light" onClick={() => handleOpen()}>
          Buka Undangan
        </button>
      </div>
      <p style={{ fontSize: "15px" }}>
        {/* Tanpa Mengurangi Rasa Hormat Kami Mengundang Anda Untuk Berhadir Di
            Acara Pernikahan Kami. */}
        *Mohon maaf apabila terdapat kesalahan nama/gelar
      </p>
    </div>
  );
};

export default Welcome;
