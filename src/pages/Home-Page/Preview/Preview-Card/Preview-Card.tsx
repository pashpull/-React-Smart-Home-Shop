import './Preview-Card.scss';

interface OfferCardProps {
  img?: string;
  title: string;
  text: string;
}

const PreviewCard = ({ img, title, text }: OfferCardProps) => {
  return (
    <div className="preview-card">
      <img className="preview-card__img" src={img}></img>
      <div className="preview-card__content">
        <div className="preview-card__title">{title}</div>
        <p className="preview-card__text">{text}</p>
      </div>
    </div>
  );
};

export default PreviewCard;
