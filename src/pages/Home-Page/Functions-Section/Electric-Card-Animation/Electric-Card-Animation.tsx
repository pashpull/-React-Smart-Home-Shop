import './Electric-Card-Animation.scss';
import firstImg from './1-img.png';
import secondImg from './2-img.png';
import thirdImg from './3-img.png';
import fourthImg from './4-img.png';
import fifthImg from './5-img.png';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef } from 'react';

const ElectricCardAnimation = () => {
  const animationWrap = useRef<Element>();

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.4,
  });

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      animationWrap.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  const docScroll = useCallback((): void => {
    if (animationWrap.current) {
      animationWrap.current.scrollTop = (window.scrollY - 1260) / 1.5;
    }
  }, []);

  useEffect(() => {
    if (inView) {
      document.addEventListener('scroll', docScroll);
    } else {
      document.removeEventListener('scroll', docScroll);
    }
  }, [inView]);

  return (
    <div className="electric-card-animation" ref={setRefs}>
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
