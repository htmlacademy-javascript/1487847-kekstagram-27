import {randomInteger, getRandomArrayElement} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAME_OF_USERS = [
  'Георгий',
  'Руслан',
  'Анна',
  'Лидия',
  'Никита',
  'Кристина',
  'Иван',
  'Роберт',
  'София',
  'Александр'
];

const MESSAGE_QUANTITY = {
  MIN: 1,
  MAX: 2,
};

const COMMENTS_QUANTITY = {
  MIN: 1,
  MAX: 10,
};
const PICTURE_QUANTITY = 25;
const AVATAR_QUANTITY = 6;

const LIKES_QUANTITY = {
  MIN: 15,
  MAX: 200,
};

const createMessage = () => Array.from({ length: randomInteger(MESSAGE_QUANTITY.MIN, MESSAGE_QUANTITY.MAX) }, () => getRandomArrayElement(COMMENTS)).join(' ');

const generateComment = (i) => ({
  id: i,
  avatar: `img/avatar-${randomInteger(1, AVATAR_QUANTITY)}.svg`,
  message : createMessage(),
  name: NAME_OF_USERS[randomInteger(0, NAME_OF_USERS.length - 1)]
});

const generateComments = () => Array.from({ length: randomInteger(COMMENTS_QUANTITY.MIN, COMMENTS_QUANTITY.MAX)}, (_, index) => generateComment(index + 1));

const createPhoto = (i) => ({
  id: i,
  url:`photos/${i}.jpg`,
  description: 'Photo Like',
  likes: randomInteger(LIKES_QUANTITY.MIN, LIKES_QUANTITY.MAX),
  comments: generateComments(),
});

const createPhotos = () => Array.from({ length: PICTURE_QUANTITY }, (_, index) => createPhoto(index + 1));

export {createPhotos};
