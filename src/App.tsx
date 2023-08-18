import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import 'normalize.css';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home-Page/Home-Page';
import EquipmentPage from './pages/Equipment-Page/Equipment-Page';
import FunctionalPage from './pages/Functional-Page/Functional-Page';
import ComplexSolutionsPage from './pages/Complex-Solutions-Page/Complex-Solutions-Page';
import ServicesAndPricesPage from './pages/Services-And-Prices-Page/Services-And-Prices-Page';
import ProjectsPage from './pages/Projects-Page/Projects-Page';
import AboutPage from './pages/About-Page/About-Page';
import ContactsPage from './pages/Contacts-Page/Contacts-Page';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/functional" element={<FunctionalPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/complexSolutions" element={<ComplexSolutionsPage />} />
          <Route
            path="/servicesAndPrices"
            element={<ServicesAndPricesPage />}
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
