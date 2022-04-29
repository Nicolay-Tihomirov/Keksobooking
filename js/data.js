import {getRandomInt, getRandomFraction, getRandomAray} from './util.js';
const SUM_ARRAY = 10;
const MIN_PRICE = 500;
const MAX_PRICE = 5000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 5;
const MAX_GUESTS = 20;
const MIN_ASIX_X = 35.65000;
const MAX_ASIX_X = 35.70000;
const MIN_ASIX_Y = 139.70000;
const MAX_ASIX_Y = 139.80000;
const RIGOUR_ASIX = 5;
const times = ['12:00','13:00','14:00'];
const titles = [
  'Хорошее предложение',
  'Отличное предложение',
  'Лучшее предложение',
  'Идеальное Предложение',
];
const types = [
  'palas',
  'flat',
  'house',
  'bungalow',
];
const advantages = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const decriptions = [
  'Сухо, тепло и чисто',
  'Уютно и комфортно',
  'Всё по феншую',
];
const urlsPhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getRandomData = () => {
  let randomPosts = [];

  for (let i = 0; i < SUM_ARRAY; i++) {
    const ASIX_X = getRandomFraction(MIN_ASIX_X, MAX_ASIX_X, RIGOUR_ASIX);
    const ASIX_Y = getRandomFraction(MIN_ASIX_Y, MAX_ASIX_Y, RIGOUR_ASIX);

    randomPosts.push({
      author: {avatar: 'img/avatars/user' + '0' + getRandomInt(1,8) + '.png'},
      location: {
        x: ASIX_X,
        y: ASIX_Y,
      },
      offer: {title: titles[getRandomInt(0,titles.length - 1)],
        address: `${ASIX_X}, ${ASIX_Y}`,
        price: getRandomInt(MIN_PRICE, MAX_PRICE),
        type: types[getRandomInt(0,types.length - 1)],
        rooms: getRandomInt(MIN_ROOMS,MAX_ROOMS),
        guests: getRandomInt(0,MAX_GUESTS),
        checkin: times[getRandomInt(0,times.length - 1)],
        checkout: times[getRandomInt(0,times.length - 1)],
        features: getRandomAray(advantages),
        decription: decriptions[getRandomInt(0,decriptions.length)],
        photos: getRandomAray(urlsPhotos),
      },

    })
  }
  return randomPosts
};
const offers = getRandomData();
export {offers};
