import './Solution-Card.scss';
import solutionCardArrow from './solution-card-arrow.svg';

interface SolutionCardProps {
  title: string;
  bcg: string;
}

const SolutionCard = ({ title, bcg }: SolutionCardProps) => {
  return (
    <div className="solution-card" style={{ backgroundImage: `url(${bcg})` }}>
      <h3 className="solution-card__title">{title}</h3>
      <a href="#" className="solution-card__arrow">
        <img
          src={solutionCardArrow}
          alt={title}
          className="solution-card__arrow-img"
        />
      </a>
    </div>
  );
};

export default SolutionCard;
