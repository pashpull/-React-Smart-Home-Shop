import './Footer.scss';

import Logo from '../Logo/Logo';
import Phone from '../Phone/Phone';

import instagramLogo from './instagram.svg';
import telegramLogo from './telegram.svg';
import youtubeLogo from './youtube.svg';
import navigateIcon from './navigate.svg';
import messageIcon from './message.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <div className="footer__info-block">
          <Logo />
          <div className="footer__social">
            <a className="footer__social-link">
              <img src={telegramLogo} alt="Telegram" />
            </a>
            <a className="footer__social-link">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a className="footer__social-link">
              <img src={youtubeLogo} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-block">
            <h4 className="footer__info-title">Контакты</h4>
            <Phone />
            <a href="" className="footer__info-item">
              <img src={messageIcon} alt="Message" />
              <span className="footer__info-text">msk@mimismart.ru</span>
            </a>
          </div>

          <div className="footer__info-block">
            <h4 className="footer__info-title">Как к нам добраться?</h4>
            <div className="footer__info-item">
              <img src={navigateIcon} alt="Navigate" />
              <span className="footer__info-text">
                г. Москва, Новоданиловская наб., 6к1
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
