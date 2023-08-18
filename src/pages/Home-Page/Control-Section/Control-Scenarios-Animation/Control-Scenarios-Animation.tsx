import './Control-Scenarios-Animation.scss';
import scenariosImg from './scenarios-img.png';

const ControlScenariosAnimation = () => {
  return (
    <div className="control-scenarios-animation">
      <img
        src={scenariosImg}
        alt=""
        className="control-scenarios-animation__img"
      />
    </div>
  );
};

export default ControlScenariosAnimation;
