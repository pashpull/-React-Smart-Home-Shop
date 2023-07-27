import './Header.scss';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Phone from '../Phone/Phone';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar">
        <Logo />
        <Nav />
        <div className="header__phone">
          <Phone />
        </div>
      </div>
    </header>
  );
};

export default Header;
