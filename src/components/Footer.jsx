import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Github, Instagram } from '../assets';

const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
        <h1>Sampai Jumpa Di Hari Bahagia Kami</h1>
        <div className='footer-surat'>
          <h3>QS. Ar-Rum Ayat 21</h3>
          <p>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </div>
      </div>
      <div className='copyright'>
        <div className='social-media-container'>
          <span>Find Me At</span>
          <div className='d-flex social-media justify-content-center'>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </div>
        </div>
        <div className='author'>
          <span>Copyright @ Achmad Fajar 2022</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
