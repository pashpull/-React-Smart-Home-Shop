import Logo from '../Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
