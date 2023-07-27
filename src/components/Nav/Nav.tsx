import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/about">Функционал</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Оборудование</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Комплексные решения</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Услуги и цены</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Проекты</Link>
        </li>
        <li className="nav__item">
          <Link to="/">О нас</Link>
        </li>
        <li className="nav__item">
          <Link to="/">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
