// обращаемся к переменным
const popupOverlay = document.querySelector('.popup');

//обращаемся к элементам профайла
const profileTitle = document.querySelector('.profile-info__title');
const profileSubtitle = document.querySelector('.profile-info__subtitle');

//обращаемся к инпутам попапа
const popupInputTitle = document.querySelector('input[name="firstname"]');
const popupInputSubtitle = document.querySelector('input[name="vocation"]');


//закрываем попап
const closeIcon = document.querySelector('.popup__close-icon');
closeIcon.onclick = function () {
    popupOverlay.classList.remove("popup_opened");
}

//открываем попап
const profileEditButton = document.querySelector('.profile-info__edit-button');
profileEditButton.onclick = function () {
    popupOverlay.classList.add("popup_opened");

    //проверяем не пустые ли значения и заполняем поля попапа
    if (profileTitle.innerHTML !== "") {
        popupInputTitle.value = profileTitle.innerHTML;
    }
    if (profileSubtitle.innerHTML !== "") {
        popupInputSubtitle.value = profileSubtitle.innerHTML;
    }
}

//поймать отправку формы
const form = document.getElementById('input-form');
form.onsubmit = function (event) {

    //отправляем действие по умолчанию
    event.preventDefault();

    //сохраняем значение полей
    profileTitle.innerHTML = popupInputTitle.value;
    profileSubtitle.innerHTML = popupInputSubtitle.value;

    //закрываем попап
    popupOverlay.classList.remove("popup_opened");
}




