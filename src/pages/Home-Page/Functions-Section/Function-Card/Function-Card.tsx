import './Function-Card.scss';

interface FunctionCardProps {
  title: string;
  functionList?: string[];
  img?: string;
  Animation?: () => JSX.Element;
}

const FunctionCard = ({
  title,
  functionList,
  img,
  Animation,
}: FunctionCardProps) => {
  return (
    <div className="function-card">
      <div className="function-card__header">
        <h2 className="function-card__title">{title}</h2>
        <ul className="function-card__list">
          {functionList &&
            functionList.map((func) => {
              return <li key={func}>{func}</li>;
            })}
        </ul>
      </div>
      <div className="function-card__img">
        <img src={img} alt={title} />
      </div>
      {Animation && <Animation />}
    </div>
  );
};

export default FunctionCard;
