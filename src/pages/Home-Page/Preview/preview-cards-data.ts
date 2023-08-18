import { IOfferOption } from '../../../interfaces/IOfferOption';

import lightsImg from './offer-lights.png';
import curtainsImg from './offer-curtains.png';
import floodProtectionImg from './offer-flood-protection.png';
import camerasImg from './offer-cameras.png';
import musicImg from './offer-music.png';
import gatesImg from './offer-gates.png';
import climateImg from './offer-climate.png';

const previewCardsData: IOfferOption[] = [
  {
    id: 0,
    img: lightsImg,
    title: 'Освещение',
    text: 'Основное освещение меняет цвет (от холодного к теплому) и яркость свечения» в зависимости от времени суток.',
    top: '28%',
    left: '10%',
  },
  {
    id: 1,
    img: curtainsImg,
    title: 'Шторы',
    text: 'Система самостоятельно откроет шторы или группы штор по времени суток или с вашей команды.',
    top: '9%',
    left: '46%',
  },
  {
    id: 2,
    img: floodProtectionImg,
    title: 'Протечки',
    text: 'Датчик врезается в плитку и выглядит эстетично. При протечке система самостоятельно перекроет воду.',
    top: '0%',
    left: '67%',
  },
  {
    id: 3,
    img: camerasImg,
    title: 'Камеры',
    text: 'Вы можете в online режиме наблюдать за тем, что происходит пока вас нет дома.',
    top: '53%',
    left: '8%',
  },
  {
    id: 4,
    img: musicImg,
    title: 'Музыка',
    text: 'Музыка в доме будет следовать за вами. Вы сможете отправлять голосовые сообщения в любую комнату. А система домашнего кинотеатра по одной команде подготовит комнату к просмотру кино.',
    top: '48%',
    left: '70%',
  },
  {
    id: 5,
    img: gatesImg,
    title: 'Ворота',
    text: 'Датчик врезается в плитку и выглядит эстетично. При протечке система самостоятельно перекроет воду.',
    top: '60%',
    left: '38%',
  },
  {
    id: 6,
    img: climateImg,
    title: 'Климат',
    text: 'Умный дом знает, какая температура воздуха вам комфортна. Знает, как ее поддерживать. Когда включить отопление, а когда кондиционер или вентиляцию.',
    top: '38%',
    left: '46%',
  },
];

export default previewCardsData;
