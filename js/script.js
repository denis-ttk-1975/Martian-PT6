/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};
// 1st task
const adv = document.querySelector('.promo__adv');
const advElem = adv.querySelectorAll('img');

for (let i = 0; i < advElem.length; i++) {
  advElem[i].remove();
}
//2d task
const genre = document.querySelector('.promo__genre');

genre.textContent = 'Драма';
//3d task
const promoBG = document.querySelector('.promo__bg');

promoBG.style.backgroundImage = 'url("img/bg.jpg")';
//4-5th tasks
const sortArr = function (arr) {
  arr.sort();
  arr.forEach((elem) => elem.toUpperCase());
  return arr;
};

const ordShortedArr = function (arr) {
  let newArr = [];
  newArr = arr.map((item, key) => {
    if (item.length > 21) {
      return key + 1 + '. ' + item.substring(0, 17) + '...';
    } else {
      return key + 1 + '. ' + item;
    }
  });
  return newArr;
};

const deleteFunc = function () {
  document.querySelectorAll('.delete').forEach((elem, i) => {
    elem.addEventListener('click', () => {
      elem.parentElement.remove();
      movieDB.movies.splice(i, 1);
      console.log(movieDB.movies);
      clearUlAddLi(ordShortedArr(sortArr(movieDB.movies)));
    });
  });
};

const clearUlAddLi = function (arr) {
  const ul = document.querySelector('ul.promo__interactive-list');
  ul.innerHTML = '';
  arr.forEach((item) => {
    let addedLi = document.createElement('li');
    addedLi.classList.add('promo__interactive-item');
    addedLi.innerHTML = `${item} <div class="delete"></div>`;
    ul.append(addedLi);
  });
  deleteFunc();
};

clearUlAddLi(ordShortedArr(sortArr(movieDB.movies)));
//6-7, 10th task

let filmName = document.querySelector('.adding__input');
let CheckBoxLovedFilm = document.querySelector('[type = "checkbox"]');
let yesButton = document.querySelector('.yes').nextElementSibling;

yesButton.addEventListener('click', (e) => {
  e.preventDefault();
  filmAdd(filmName.value);
  filmName.value = '';
  CheckBoxLovedFilm.checked = false;
});

const filmAdd = function (nameField) {
  if (nameField && !CheckBoxLovedFilm.checked) {
    movieDB.movies.push(nameField.toUpperCase());
    clearUlAddLi(ordShortedArr(sortArr(movieDB.movies)));
  }

  //9th task

  if (nameField && CheckBoxLovedFilm.checked) {
    movieDB.movies.push(nameField.toUpperCase());
    clearUlAddLi(ordShortedArr(sortArr(movieDB.movies)));
    console.log('Добавляем любимый фильм');
  }
};
//8th task
