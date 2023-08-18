import SectionHeader from '../../../components/Section-Header/Section-Header';
import ElectricCardAnimation from './Electric-Card-Animation/Electric-Card-Animation';
import FunctionCard from './Function-Card/Function-Card';
import './Functions-Section.scss';

import electricianCardImg from './electrician.svg';
import lightingCardImg from './lighting.png';
import safetyCardImg from './safety.png';
import climateCardImg from './climate.png';
import curtainsCardImg from './curtains.png';
import multimediaCardImg from './multimedia.png';

const FunctionsSection = () => {
  return (
    <section className="functions-section">
      <SectionHeader
        tag={'функционал'}
        title={'Что может умный дом?'}
        text={'возможности, доступные при установке системы MimiSmart'}
      />
      <div className="functions-section__functions">
        <FunctionCard
          title={'Электрика'}
          functionList={[
            'Управление розетками',
            'Сценарные выключатели',
            'Бесперебойное питание',
            'Стабилизация напряжения',
            'Молниезащита',
          ]}
          img={electricianCardImg}
          Animation={ElectricCardAnimation}
        />
        <FunctionCard
          title={'Освещение'}
          functionList={['Датчики движения', 'Биодинамическое освещение']}
          img={lightingCardImg}
        />
        <FunctionCard
          title={'Безопасность'}
          functionList={[
            'Электрозамок',
            'Защита от протечек',
            'Охранная сигнализация',
            'Видеонаблюдение',
            'Домофония',
          ]}
          img={safetyCardImg}
        />
        <FunctionCard
          title={'Климат-контроль'}
          functionList={[
            'Теплый пол',
            'Конвекторы',
            'Радиаторы',
            'Кондиционеры',
            'Вентиляция',
            'Увлажнение',
          ]}
          img={climateCardImg}
        />
        <FunctionCard
          title={'Шторы'}
          functionList={[
            'Работа по таймеру и в сценариях',
            'Управление со смартфона, голосом и клавишными выключателями',
          ]}
          img={curtainsCardImg}
        />
        <FunctionCard
          title={'Мультимедиа'}
          functionList={[
            'Домашний кинотеатр',
            'Музыка в каждой комнате',
            'AirPlay',
            'Следящая музыка',
            'Голосовые сообщения по помещениям',
          ]}
          img={multimediaCardImg}
        />
      </div>
    </section>
  );
};

export default FunctionsSection;
