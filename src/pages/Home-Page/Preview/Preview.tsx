import SliderCalcPrice from '../../../UI/Slider-Calc-Price/Slider-Calc-Price';
import './Preview.scss';
import previewCardsData from './preview-cards-data';
import PreviewOfferPosition from './Preview-Offer-Position/Preview-Offer-Position';
import PreviewCarousel from './Preview-Carousel/Preview-Carousel';
import previewBcg from './preview-bcg.png';

const Preview = () => {
  return (
    <div className="preview">
      <div className="preview__header">
        <h1 className="preview__title">Умный дом под ключ</h1>
        <p className="preview__text">
          российский производитель современной электрики
        </p>
        <SliderCalcPrice />
      </div>

      <div className="preview__bcg">
        <img className="preview__bcg-img" src={previewBcg} />
      </div>

      <div className="preview__offers">
        {previewCardsData.map((pos) => {
          return (
            <PreviewOfferPosition
              key={pos.id}
              img={pos.img}
              title={pos.title}
              text={pos.text}
              top={pos.top}
              left={pos.left}
            />
          );
        })}
      </div>
      <PreviewCarousel offers={previewCardsData} />
    </div>
  );
};

export default Preview;
