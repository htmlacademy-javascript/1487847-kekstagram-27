import {createPopUpContent} from './popup.js';
const picturesContain = document.querySelector('.pictures'); // ишем секцию в которую нужно вставить

const pictureMain = document.querySelector('#picture').content.querySelector('.picture');

const createMiniatures = (miniatureProps) => {
  miniatureProps.forEach((miniature) => {

    const postLikes = miniature.likes;

    const picture = pictureMain.cloneNode(true); // клонируем шаблон в другую переменную

    picture.firstElementChild.src = miniature.url;

    picture.querySelector('.picture__likes').textContent = postLikes;

    picture.querySelector('.picture__comments').textContent = miniature.comments.length;


    picturesContain.append(picture);
    picture.addEventListener('click', () => createPopUpContent(miniature.url, postLikes, miniature.comments, miniature.description));
  });
};


export {createMiniatures};

