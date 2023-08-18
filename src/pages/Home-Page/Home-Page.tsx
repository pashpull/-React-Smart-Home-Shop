import ControlSection from './Control-Section/Control-Section';
import FunctionsSection from './Functions-Section/Functions-Section';
import GuaranteeSection from './Guarantee-Section/Guarantee-Section';
import './Home-Page.scss';
import Preview from './Preview/Preview';
import SolutionsSection from './Solutions-Section/Solutions-Section';

const HomePage = () => {
  return (
    <>
      <Preview />

      <FunctionsSection />

      <SolutionsSection />

      <GuaranteeSection />

      <ControlSection />
    </>
  );
};

export default HomePage;
