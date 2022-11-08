// const userDialog = document.querySelector('.big-picture');

// userDialog.classList.remove('hidden');

// userDialog.document.querySelector('.img-upload__overlay').classList.remove('hidden');

import {createPhotos} from './data.js';
const createOneMiniature = () => {
  const listOfMiniature = document.createElement('div'); // создаем новый элемент
  listOfMiniature.className = 'miniature-wrapper';

  const picturesContain = document.querySelector('.pictures'); // ишем секцию в которую нужно вставить

  picturesContain.append(listOfMiniature);

  const onePictureMain = document.querySelector('#picture').content.querySelector('.picture');

  const miniatures = createPhotos();

  miniatures.forEach((oneMiniature) => {
    const onePicture = onePictureMain.cloneNode(true); // клонируем шаблон в другую переменную
    onePicture.firstElementChild.src = oneMiniature.url;
    onePicture.querySelector('.picture__likes').textContent = oneMiniature.likes;
    onePicture.querySelector('.picture__comments').textContent = oneMiniature.comments.length;
    listOfMiniature.append(onePicture);
  });
};

export {createOneMiniature};

