import { Link } from 'react-router-dom';

import './Nav.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';
import { setMenuState } from '../../store/slices/menuSlice';

interface NavItemProps {
  link: string;
  text: string;
}

const NavItem = ({ text, link }: NavItemProps) => {
  const menuState = useAppSelector((state) => state.menu.isOpen);
  const dispatch = useAppDispatch();

  return (
    <li className="nav__item">
      <Link
        to={link}
        className="nav__link"
        onClick={() => menuState && dispatch(setMenuState())}
      >
        {text}
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem text="функционал" link={'/functional'} />
        <NavItem text="Оборудование" link={'/equipment'} />
        <NavItem text="Комплексные решения" link={'/complexSolutions'} />
        <NavItem text="Услуги и цены" link={'/servicesAndPrices'} />
        <NavItem text="Проекты" link={'/projects'} />
        <NavItem text="О нас" link={'/about'} />
        <NavItem text="Контакты" link={'/contacts'} />
      </ul>
    </nav>
  );
};

export default Nav;
