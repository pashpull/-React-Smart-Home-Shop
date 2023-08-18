import { useInView } from 'react-intersection-observer';
import './Control-Voice-Animation.scss';
import firstStationImg from './station-1.png';
import secondStationImg from './station-2.png';
import thirdStationImg from './station-3.png';
import siriIconGif from './siri-icon.gif';

// import { useEffect } from 'react';

const ControlVoiceAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animationClassName = `control-voice-animation ${
    inView && 'control-voice-animation_on'
  }`;

  return (
    <div className={animationClassName} ref={ref}>
      <img
        src={firstStationImg}
        alt=""
        className="control-voice-animation__img first-station"
      />
      <img
        src={secondStationImg}
        alt=""
        className="control-voice-animation__img second-station"
      />
      <img
        src={thirdStationImg}
        alt=""
        className="control-voice-animation__img third-station"
      />
      <figure className="control-voice-animation__img siri-wrap">
        <img src={siriIconGif} alt="" className="siri-icon" />
      </figure>
    </div>
  );
};

export default ControlVoiceAnimation;
