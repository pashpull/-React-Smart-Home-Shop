import './Phone.scss';

import phoneIcon from './phone.svg';

const Phone = () => {
  return (
    <button className="phone">
      <img src={phoneIcon} alt="Phone" className="phone__icon" />
      <span className="phone__number">+7 (983) 285-36-57</span>
    </button>
  );
};

export default Phone;
