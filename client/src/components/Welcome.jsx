import React from 'react';
import { useState } from 'react';

const Welcome = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`welcome text-white ${open ? 'open' : ''}`}>
      <h1>Undangan Pernikahan</h1>
      <div className='to'>
        <span>Kepada </span>
        <span>Achmad Fajar</span>
      </div>
      <p>
        Tanpa Mengurangi Rasa Hormat Kami Mengundang Anda Untuk Berhadir Di
        Acara Pernikahan Kami.
      </p>
      <div className='mt-5'>
        <button className='btn btn-light' onClick={() => setOpen(!open)}>Buka Undangan</button>
      </div>
    </div>
  );
};

export default Welcome;
