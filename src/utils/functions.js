import React, { useState, useEffect } from 'react';

export const makeid = (length) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const convertSecondToDate = (seconds) => {
  return new Date(seconds * 1000).toString();
};

export const readebleDate = (date) => {
  const monthLists = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const objDate = new Date(date);
  const getYear = objDate.getFullYear();
  const getMonth = objDate.getMonth();
  const getDate = objDate.getDate();
  console.log(getYear, getMonth, getDate);
  return `${getDate} ${monthLists[getMonth]} ${getYear}`;
};

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  console.log(playing, 'play music');

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.pause() : audio.play();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('canplay', () => setPlaying(false));
    return () => {
      audio.removeEventListener('canplay', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};
