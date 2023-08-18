import { useInView } from 'react-intersection-observer';
import './Control-Switches-Animation.scss';
import switchesImg from './switches.png';

// import { useEffect } from 'react';

const ControlSwitchesAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animationClassName = `control-switches-animation ${
    inView && 'control-switches-animation_on'
  }`;

  return (
    <div className={animationClassName} ref={ref}>
      <img
        src={switchesImg}
        alt=""
        className="control-switches-animation__img"
      />
    </div>
  );
};

export default ControlSwitchesAnimation;
