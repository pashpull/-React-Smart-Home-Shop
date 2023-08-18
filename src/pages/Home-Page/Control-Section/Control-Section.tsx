import SectionHeader from '../../../components/Section-Header/Section-Header';
import ControlCard from './Control-Card/Control-Card';

import './Control-Section.scss';
import ControlAppAnimation from './Control-App-Animation/Control-App-Animation';
import ControlSwitchesAnimation from './Control-Switches-Animation/Control-Switches-Animation';
import ControlVoiceAnimation from './Control-Voice-Animation/Control-Voice-Animation';
import ControlScenariosAnimation from './Control-Scenarios-Animation/Control-Scenarios-Animation';

const ControlSection = () => {
  return (
    <section className="control-section">
      <SectionHeader
        tag={'управление'}
        title={'Управляй как удобно'}
        text={'удобное взаимодействие с домом'}
      />
      <div className="control-section__cards">
        <ControlCard
          title={'Удобное приложение'}
          text={
            'Управление всей электроникой в доме с экрана телефона, планшета или часов'
          }
          link={{ path: '#', text: 'Подробнее' }}
          Animation={ControlAppAnimation}
        />

        <ControlCard
          title={'Умные выключатели'}
          text={
            'Разные сценарии на каждую кнопку: яркий, средний, тусклый и вкл/выкл все устройства'
          }
          link={{ path: '#', text: 'Смотреть видео' }}
          Animation={ControlSwitchesAnimation}
        />

        <ControlCard
          title={'Голосовое управление'}
          text={
            'Если телефон или выключатель не под рукой, просто скажите “Алиса” или “Сири” и система выполнит десятки действий'
          }
          Animation={ControlVoiceAnimation}
        />

        <ControlCard
          title={'Готовые сценарии'}
          text={'Десятки сценариев, С которыми Ваша жизнь станет комфортнее'}
          Animation={ControlScenariosAnimation}
        />
      </div>
    </section>
  );
};

export default ControlSection;
