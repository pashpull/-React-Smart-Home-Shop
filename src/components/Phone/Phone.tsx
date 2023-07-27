import './Phone.scss';

const Phone = () => {
  return (
    <button className="phone">
      <img src="phone.svg" alt="Phone icon" className="phone__icon" />
      <span className="phone__number">+7 (983) 285-36-57</span>
    </button>
  );
};

export default Phone;
