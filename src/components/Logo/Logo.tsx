import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <span>MiMi</span>Smart
    </Link>
  );
};

export default Logo;
