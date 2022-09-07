import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import { Github, Instagram } from '../assets';

const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
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
        <div className='footer-salam'>
          <h3>"Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan do'a restu kepada kedua mempelai"</h3>
          <h2>Wassalamu'alaikum Warahmatullahi Wabarakatuh.</h2>
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
          <span>Copyright @ Fantastic Four</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
