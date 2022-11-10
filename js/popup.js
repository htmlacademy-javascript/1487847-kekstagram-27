import {createPhotos} from './data.js';

const picturesContain = document.querySelector('.pictures'); // ишем секцию в которую нужно вставить

const onePictureMain = document.querySelector('#picture').content.querySelector('.picture');

const miniatures = createPhotos();

const createMiniatures = (miniatureProps) => {
  miniatureProps.forEach((oneMiniature) => {

    const onePicture = onePictureMain.cloneNode(true); // клонируем шаблон в другую переменную

    onePicture.firstElementChild.src = oneMiniature.url;

    onePicture.querySelector('.picture__likes').textContent = oneMiniature.likes;

    onePicture.querySelector('.picture__comments').textContent = oneMiniature.comments.length;

    picturesContain.append(onePicture);
  });
};

export {createMiniatures,miniatures};

