// обращаемся к переменным
const popupOverlay = document.querySelector('.popup');

//обращаемся к элементам профайла
const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

//обращаемся к форме и инпутам попапа
const form = document.getElementById('input-form');
const popupInputTitle = form.firstname;
const popupInputSubtitle = form.vocation;

//обращаемся к кнопке редактирования попапа
const profileEditButton = document.querySelector('.profile-info__edit-button');

//обращаемся к кнопке закрытия попапа
const closeIcon = document.querySelector('.popup__close-icon');

//закрываем попап
function closePopup() {
    popupOverlay.classList.remove('popup_opened');
}

//добавлен слушатель
closeIcon.addEventListener('click', closePopup);

//объявляем функцию открытия попапа
function openPopup () {
    popupOverlay.classList.add('popup_opened');

    //заполняем инпуты
    popupInputTitle.value = profileTitle.textContent;
    popupInputSubtitle.value = profileSubtitle.textContent;
}

//добавляем слушатель
profileEditButton.addEventListener('click', openPopup);

//объявляем функцию сохранения полей
function formSubmitHandler (evt) {

    //отправляем действие по умолчанию
    evt.preventDefault();

    //сохраняем значение полей
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;

    //закрываем попап
    closePopup();
}

//слушатель
form.addEventListener('submit', formSubmitHandler);
