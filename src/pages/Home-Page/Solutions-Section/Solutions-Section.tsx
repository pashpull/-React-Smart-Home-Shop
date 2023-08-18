import SectionHeader from '../../../components/Section-Header/Section-Header';
import './Solutions-Section.scss';

import SolutionCard from './Solution-Card/Solution-Card';

import apartmentSolutionsBcg from './apartment-solutions-bcg.png';
import houseSolutionsBcg from './house-solutions-bcg.png';
import countryHouseSolutionsBcg from './country-house-solutions-bcg.png';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <SectionHeader
        title={'Комплексные решения'}
        text={'на основе 17-летнего опыта'}
      />
      <div className="solutions-section__cards">
        <SolutionCard title={'Для квартиры'} bcg={apartmentSolutionsBcg} />
        <SolutionCard title={'Для дома'} bcg={houseSolutionsBcg} />
        <SolutionCard title={'Для дачи'} bcg={countryHouseSolutionsBcg} />
      </div>
    </section>
  );
};

export default SolutionsSection;
