import './Menu-Btn.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksForRedux';
import { setMenuState } from '../../store/slices/menuSlice';

const MenuBtn = () => {
  const menuIsOpen = useAppSelector((state) => state.menu.isOpen);
  const dispatch = useAppDispatch();

  const menuBtnHandler = () => {
    dispatch(setMenuState());
  };

  const menuBtnClassName = `menu-btn${menuIsOpen ? ' menu-btn_active' : ''}`;

  return (
    <button className={menuBtnClassName} onClick={menuBtnHandler}>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
      <span className="menu-btn__span"></span>
    </button>
  );
};

export default MenuBtn;
