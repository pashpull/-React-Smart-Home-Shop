import { useState } from 'react';
import PreviewCard from '../Preview-Card/Preview-Card';
import SliderBase from '../../../../UI/Slider-Base/Slider-Base';
import './Preview-Offer-Position.scss';

interface PreviewOfferPositionProps {
  img: string;
  title: string;
  text: string;
  top: string;
  left: string;
}

const PreviewOfferPosition = ({
  img,
  title,
  text,
  top,
  left,
}: PreviewOfferPositionProps) => {
  const [offerPosState, setOfferPosState] = useState(false);

  const offerPosHandler = () => {
    setOfferPosState(!offerPosState);
  };

  const offerClassName = `preview-offer-position${
    offerPosState ? ' preview-offer-position_active' : ''
  }`;

  return (
    <div className={offerClassName} style={{ top: top, left: left }}>
      <PreviewCard img={img} title={title} text={text} />
      <SliderBase title={title} toDo={offerPosHandler} />
    </div>
  );
};

export default PreviewOfferPosition;
