import './Section-Header.scss';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  text?: string;
}

const SectionHeader = ({ tag, title, text }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      {tag && <div className="section-header__tag">{tag}</div>}
      <h2 className="section-header__title">{title}</h2>
      {text && <p className="section-header__text">{text}</p>}
    </div>
  );
};

export default SectionHeader;
