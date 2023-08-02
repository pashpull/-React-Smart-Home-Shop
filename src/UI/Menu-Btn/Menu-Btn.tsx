import { useState } from 'react';
import './Menu-Btn.scss';

const MenuBtn = () => {
  const [menuBtnState, setMenuBtnState] = useState(false);

  const menuBtnHandler = () => {
    setMenuBtnState(!menuBtnState);
  };

  const menuBtnClassName = `menu-btn${menuBtnState ? ' menu-btn_active' : ''}`;

  return (
    <button className={menuBtnClassName} onClick={menuBtnHandler}>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
    </button>
  );
};

export default MenuBtn;
