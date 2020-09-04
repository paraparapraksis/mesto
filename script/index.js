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


function closePopup() {
    popupOverlay.classList.remove('popup_opened');
}

//закрываем попап
//добавлен слушатель
closeIcon.addEventListener('click', function () {
    closePopup();
})

//открываем попап
//добавляем слушатель
profileEditButton.addEventListener('click', function () {
    popupOverlay.classList.add('popup_opened');
})

//заполняем поля попапа
if (profileTitle.textContent) {
    popupInputTitle.value = profileTitle.textContent;
}
if (profileSubtitle.textContent) {
    popupInputSubtitle.value = profileSubtitle.textContent;
}

//функция отправки формы
form.addEventListener('submit', function (event) {

    //отправляем действие по умолчанию
    event.preventDefault();

    //сохраняем значение полей
    profileTitle.textContent = popupInputTitle.value;
    profileSubtitle.textContent = popupInputSubtitle.value;

    //закрываем попап
    closePopup();
})



