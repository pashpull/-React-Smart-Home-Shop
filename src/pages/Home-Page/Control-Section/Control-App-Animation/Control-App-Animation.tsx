import { useInView } from 'react-intersection-observer';
import './Control-App-Animation.scss';
import padImg from './pad.png';
import phoneImg from './phone.png';
import watchImg from './watch.png';
// import { useEffect } from 'react';

const ControlAppAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animationClassName = `control-app-animation ${
    inView && 'control-app-animation_on'
  }`;

  return (
    <div className={animationClassName} ref={ref}>
      <img src={padImg} alt="" className="control-app-animation__img pad-img" />
      <img
        src={phoneImg}
        alt=""
        className="control-app-animation__img phone-img"
      />
      <img
        src={watchImg}
        alt=""
        className="control-app-animation__img watch-img"
      />
    </div>
  );
};

export default ControlAppAnimation;
