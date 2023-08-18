import Button from '../../../UI/Button/Button';
import SectionHeader from '../../../components/Section-Header/Section-Header';

import './Guarantee-Section.scss';

const GuaranteeSection = () => {
  return (
    <section className="guarantee-banner">
      <SectionHeader
        tag={'на всю нашу продукцию'}
        title={'5 лет гарантии'}
        text={
          'Самая длительная гарантия на рынке и круглосуточная поддержка по любым вопросам'
        }
      />
      <Button text="Рассчитать стоимость" color="accent" />
      <div className="guarantee-banner__offer">
        <h2 className="guarantee-banner__offer-text">
          ПЯТЬ
          <br />
          ЛЕТ
        </h2>
      </div>
    </section>
  );
};

export default GuaranteeSection;
