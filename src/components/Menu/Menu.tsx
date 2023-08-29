import { useAppSelector } from '../../hooks/hooksForRedux';
import Nav from '../Nav/Nav';

import './Menu.scss';

const Menu = () => {
  const menuState = useAppSelector((store) => store.menu.isOpen);

  const menuClassName = `menu${menuState ? ' menu_active' : ''}`;

  return (
    <div className={menuClassName}>
      <div className="menu__inner">
        <div className="menu__content">{menuState && <Nav />}</div>
      </div>
    </div>
  );
};

export default Menu;
