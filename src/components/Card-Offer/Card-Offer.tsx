import './Card-Offer.scss';

interface CardOfferProps {
  img: string;
  title: string;
  text: string;
}

const CardOffer = ({ img, title, text }: CardOfferProps) => {
  return (
    <div className="card-offer">
      <img className="card-offer__img" src={img}></img>
      <div className="card-offer__content">
        <div className="card-offer__title">{title}</div>
        <p className="card-offer__text">{text}</p>
      </div>
    </div>
  );
};

export default CardOffer;
