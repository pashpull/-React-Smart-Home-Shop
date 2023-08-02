import { useState } from 'react';
import './Slider-Base.scss';

interface SliderBaseProps {
  title: string;
  toDo: () => void;
}

const SliderBase = ({ title, toDo }: SliderBaseProps) => {
  const [sliderState, setSliderState] = useState<boolean>(false);

  const sliderHandler = () => {
    setSliderState(!sliderState);
    toDo();
  };

  return (
    <div className={`slider-base${sliderState ? ' slider-base_active' : ''}`}>
      <div className="slider-base__control-wrap" onClick={sliderHandler}>
        <span className="slider-base__control"></span>
      </div>
      <span className="slider-base__text">{title}</span>
    </div>
  );
};

export default SliderBase;
