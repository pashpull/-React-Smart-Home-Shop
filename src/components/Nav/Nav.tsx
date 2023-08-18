import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/functional" className="nav__link">
            Функционал
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/equipment" className="nav__link">
            Оборудование
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/complexSolutions" className="nav__link">
            Комплексные решения
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/servicesAndPrices" className="nav__link">
            Услуги и цены
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className="nav__link">
            Проекты
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            О нас
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contacts" className="nav__link">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
