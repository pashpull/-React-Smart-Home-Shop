import './Header.scss';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Phone from '../Phone/Phone';
import MenuBtn from '../../UI/Menu-Btn/Menu-Btn';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar-wrap">
        <div className="header__bar">
          <div className="header__logo">
            <Logo />
          </div>
          <Nav />
          <div className="header__phone">
            <Phone />
          </div>
          <MenuBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
