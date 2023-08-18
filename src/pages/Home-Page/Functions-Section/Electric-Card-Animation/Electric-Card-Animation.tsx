import './Electric-Card-Animation.scss';
import firstImg from './1-img.png';
import secondImg from './2-img.png';
import thirdImg from './3-img.png';
import fourthImg from './4-img.png';
import fifthImg from './5-img.png';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

//toDo, сделать нормально, используя колбэк и реф
const docScroll = (): any => {
  const wrap = document.querySelector('.electric-card-animation');
  wrap!.scrollTop = (window.scrollY - 1260) / 1.5;
};

const ElectricCardAnimation = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const asd = (): void => {
    if (inView) {
      document.addEventListener('scroll', docScroll);
    } else {
      document.removeEventListener('scroll', docScroll);
    }
  };

  useEffect(() => {
    asd();
  }, [inView]);

  useEffect(() => {
    docScroll();
  }, []);

  return (
    <div className="electric-card-animation" ref={ref}>
      <div className="electric-card-animation__inner">
        <div className="electric-card-animation__img">
          <img src={firstImg} alt="" id={'1'} />
        </div>
        <div className="electric-card-animation__img">
          <img src={secondImg} alt="" id={'2'} />
        </div>
        <div className="electric-card-animation__img">
          <img src={thirdImg} alt="" id={'3'} />
        </div>
        <div className="electric-card-animation__img">
          <img src={fourthImg} alt="" id={'4'} />
        </div>
        <div className="electric-card-animation__img">
          <img src={fifthImg} alt="" id={'5'} />
        </div>
      </div>
    </div>
  );
};

export default ElectricCardAnimation;
