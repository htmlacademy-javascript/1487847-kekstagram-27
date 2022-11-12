const popUp = document.querySelector('.big-picture'); // находим поп ап у которого надо убрать класс hidden
const popUpUrl = popUp.querySelector('.big-picture__img');
const commentCount = document.querySelector('.social__comment-count'); // находим счетчик комментариев
const userSocialList = document.querySelector('.social__comments'); // список комментариев
const userSocialTemplate = document.querySelector('#user-comment').content.querySelector('.social__comment'); // ищем шаблон и li внутри него
const closeButton = document.querySelector('.big-picture__cancel'); // кнопка закрытия поп ап
const bodyModal = document.querySelector('body');
// Закрывание по клику на крестик
const closePopUp = (e) => {

  if ( !e.keyCode || e.keyCode === 27){
    popUp.classList.add('hidden');
    bodyModal.classList.remove('.modal-open');
    userSocialList.innerHTML = '';
  }
};

const openPopUp = () => {
  popUp.classList.remove('hidden');
  bodyModal.classList.add('.modal-open');
};

// document.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) // проверяем что код равен esc
// {
//     popup.classList.remove('modal--show'); // если условия выполняется удалем класс
//   }
// });

closeButton.addEventListener('click', closePopUp); // навешиваем слушатель на кнопку
document.addEventListener('keydown', closePopUp);

const showComments = (commentsArray) => {

  commentsArray.forEach((comment) => {
    const userSocialItem = userSocialTemplate.cloneNode(true); // записываем li в новую переменную

    userSocialList.append(userSocialItem); // добавляем li в список комментариев

    const userAvatarImg = userSocialItem.querySelector('img');
    userAvatarImg.src = comment.avatar;
    userAvatarImg.alt = comment.name;
    userSocialItem.querySelector('.social__text').textContent = comment.message;
  });
};


const createPopUpContent = (url, likes, comments, description) => {

  const popUpImgUrl = popUpUrl.querySelector('img');
  popUpImgUrl.src = url;

  commentCount.classList.add('hidden'); // скрываем счёткик комментариев

  const commentsLoader = popUp.querySelector('.comments-loader'); // находим кнопку загрузить еще
  commentsLoader.classList.add('hidden'); // скрываем кнопку загрузить еще


  const likeСounter = popUp.querySelector('.likes-count'); // ищем счетчик лайков
  likeСounter.textContent = likes; // добавляем из массива

  const commentCounter = commentCount.querySelector('.comments-count');
  commentCounter.textContent = comments.length;

  document.querySelector('.social__caption').textContent = description;
  showComments(comments);
  openPopUp();
};

export {createPopUpContent};
