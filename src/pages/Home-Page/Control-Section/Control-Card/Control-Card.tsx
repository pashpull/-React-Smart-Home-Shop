import './Control-Card.scss';

interface ControlCardProps {
  title: string;
  text: string;
  link?: {
    text: string;
    path: string;
  };
  Animation: () => JSX.Element;
}

const ControlCard = ({ title, text, link, Animation }: ControlCardProps) => {
  return (
    <div className="control-card">
      <div className="control-card__header">
        <h4 className="control-card__title">{title}</h4>
        <p className="control-card__text">{text}</p>
        <a href={link?.path} className="control-card__link">
          {link?.text}
        </a>
      </div>
      <div className="control-card__media-wrap">
        <Animation />
      </div>
    </div>
  );
};

export default ControlCard;
