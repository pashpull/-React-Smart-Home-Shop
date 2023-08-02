import { useState } from 'react';
import CardOffer from '../Card-Offer/Card-Offer';
import SliderBase from '../../UI/Slider-Base/Slider-Base';
import './Offer-Position.scss';

interface OfferPositionProps {
  img: string;
  title: string;
  text: string;
  top: string;
  left: string;
}

const OfferPosition = ({ img, title, text, top, left }: OfferPositionProps) => {
  const [offerPosState, setOfferPosState] = useState(false);

  const offerPosHandler = () => {
    setOfferPosState(!offerPosState);
  };

  const offerClassName = `offer-position${
    offerPosState ? ' offer-position_active' : ''
  }`;

  return (
    <div className={offerClassName} style={{ top: top, left: left }}>
      <CardOffer img={img} title={title} text={text} />
      <SliderBase title={title} toDo={offerPosHandler} />
    </div>
  );
};

export default OfferPosition;
