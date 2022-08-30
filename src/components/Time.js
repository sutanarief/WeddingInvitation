import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { Card } from 'react-bootstrap';
import { Resepsi, Wedding } from '../assets';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  background:
    'linear-gradient(90deg, rgba(253,253,255,1) 0%, rgba(253,253,255,1) 51%, rgba(253,253,255,1) 100%)',
  width: '100%',
};

const Time = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDownDate = new Date('Sept 18, 2022 08:00:00').getTime();
  const getTimeUntil = () => {
    let nowDate = new Date().getTime();
    let timeLeft = countDownDate - nowDate;

    if (timeLeft < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
      setSeconds(Math.floor((timeLeft / 1000) % 60));
    }
  };

  const formatter = (num) => {
    return num < 10 ? '0' + num : num;
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(), 1000);
  }, []);

  const goToAddress = () => {
    window.location.assign(
      'https://www.google.com/maps/search/Jln.+Kerapu+2+RT+007+RW+001+Kel.+Pluit+Kec.+Penjaringan,+Jakarta+Utara+14450/@-6.1106792,106.7715821,17z'
    );
  };
  return (
    <>
      <div className='time-container'>
        <div className='time__box'>
          <span className='time__number'>{formatter(days)}</span>
        </div>
        <div className='time__box'>
          <span className='time__number'>{formatter(hours)}</span>
        </div>
        <div className='time__box'>
          <span className='time__number'>{formatter(minutes)}</span>
        </div>
        <div className='time__box'>
          <span className='time__number'>{formatter(seconds)}</span>
        </div>
      </div>
      <div className='time-container'>
        <div className='time__date'>
          <span className='text__date'>Days</span>
        </div>
        <div className='time__date'>
          <span className='text__date'>Hours</span>
        </div>
        <div className='time__date'>
          <span className='text__date'>Minutes</span>
        </div>
        <div className='time__date'>
          <span className='text__date'>Seconds</span>
        </div>
      </div>
      <div className='thankyou'>
        <div>
          <b>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</b>
          <br />
          <b>Assalamualaikum warahmatullahi wabarakatuh</b>
          <p>
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk dapat hadir di acara pernikahan kami.
          </p>
        </div>
      </div>
      <div className='akad pb-5 pt-3'>
        <div className='akad-header pb-2'>
          <h2>Akad dan Resepsi</h2>
        </div>
        <div className='mt-1'>
          <Row>
            <Col md={6} sm={12}>
              <Card className='p-3 bg-brown text-light mb-2'>
                <div className='card-akad-header'>
                  <h3>Akad</h3>
                </div>
                <Row className='card-akad-body'>
                  <Col md={4} sm={12} xs={12} className='me-1'>
                    <Wedding className='akad-thumbnail' />
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <p>Minggu, 18 September 2022 </p>
                    <p>Pukul 10.00 WIB</p> <p>Kediaman Mempelai Wanita</p>
                    <p>
                      Jln. Kerapu 2 RT 007 RW 001 Kel. Pluit Kec. Penjaringan,
                      Jakarta Utara 14450
                    </p>
                    <button
                      className='btn btn-light mt-3'
                      onClick={() => goToAddress()}
                    >
                      <FontAwesomeIcon icon={faMap} /> Lihat Di Peta
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={6} sm={12}>
              <Card className='p-3 bg-brown text-light'>
                <div className='card-akad-header'>
                  <h3>Resepsi</h3>
                </div>
                <Row className='card-akad-body'>
                  <Col md={4} sm={12} xs={12} className='me-1'>
                    <Resepsi className='akad-thumbnail' />
                  </Col>
                  <Col md={7} sm={12} xs={12}>
                    <p>Minggu, 18 September 2022 </p>
                    <p>Pukul 12.00 WIB s/d 21:00 WIB</p>{' '}
                    <p>Kediaman Mempelai Wanita</p>
                    <p>
                      Jln. Kerapu 2 RT 007 RW 001 Kel. Pluit Kec. Penjaringan,
                      Jakarta Utara 14450
                    </p>
                    <button
                      className='btn btn-light mt-3'
                      onClick={() => goToAddress()}
                    >
                      <FontAwesomeIcon icon={faMap} /> Lihat Di Peta
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Time;
