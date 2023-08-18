import { useEffect, useRef } from 'react';
import { IOfferOption } from '../../../../interfaces/IOfferOption';
import OfferCard from '../Preview-Card/Preview-Card';
import './Preview-Carousel.scss';

interface OfferCarouselProps {
  offers: IOfferOption[];
}

const PreviewCarousel = ({ offers }: OfferCarouselProps) => {
  const actualCardRef = useRef(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const sliderThumbRef = useRef<any>(null);

  const sliderThumbMovement = () => {
    if (sliderThumbRef.current) {
      sliderThumbRef.current.style.left = actualCardRef.current * 26 + 'px';
    }
  };

  const touchStartHandle = (e: any) => {
    const firstTouch: number = e.touches[0].clientX;

    const target = e.currentTarget;

    const startPos = target.scrollLeft;

    const cardCollection = target
      .querySelector('.preview-carousel__inner')
      .querySelectorAll('.preview-card');

    let outsideSlideLength =
      cardCollection[actualCardRef.current].clientWidth / 2;

    let lastSwipe: number = 0;

    target.ontouchmove = (e: any) => {
      const positionDif = e.touches[0].clientX - firstTouch;

      if (positionDif < 0) {
        lastSwipe =
          positionDif * -1 < outsideSlideLength
            ? positionDif * -1
            : outsideSlideLength;
      } else if (positionDif > 0) {
        lastSwipe =
          positionDif < outsideSlideLength ? -positionDif : -outsideSlideLength;
      }

      target.scrollTo(startPos + lastSwipe, 0);

      target.ontouchend = () => {
        // обработка свайпов крайних карточек
        if (actualCardRef.current === 0 && positionDif > 0) {
          target.scrollLeft -= lastSwipe;
        } else if (
          actualCardRef.current === cardCollection.length - 1 &&
          positionDif < 0
        ) {
          target.scrollLeft -= lastSwipe;
        }
        // обработка перелистывания между карточками
        if (
          positionDif < 0 &&
          actualCardRef.current < cardCollection.length - 1
        ) {
          target.scrollLeft +=
            cardCollection[actualCardRef.current].clientWidth + 20 - lastSwipe;

          if (actualCardRef.current <= cardCollection.length - 1) {
            actualCardRef.current += 1;
          }
          sliderThumbMovement();
        } else if (positionDif > 0 && actualCardRef.current > 0) {
          target.scrollLeft -=
            cardCollection[actualCardRef.current - 1].clientWidth +
            20 +
            lastSwipe;

          if (actualCardRef.current > 0) {
            actualCardRef.current -= 1;
          }
          sliderThumbMovement();
        }
      };
    };
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 666;
    }
  }, []);

  return (
    <div
      className="preview-carousel"
      onTouchStart={touchStartHandle}
      ref={carouselRef}
    >
      <div className="preview-carousel__inner">
        {offers.map((pos) => {
          return <OfferCard key={pos.id} title={pos.title} text={pos.text} />;
        })}
      </div>
      <div className="preview-carousel__slider">
        <span className="preview-carousel__slider-dot"></span>
        {offers.map((pos) => {
          return (
            <span key={pos.id} className="preview-carousel__slider-dot"></span>
          );
        })}
        <span
          ref={sliderThumbRef}
          className="preview-carousel__slider-thumb"
        ></span>
      </div>
    </div>
  );
};

export default PreviewCarousel;
