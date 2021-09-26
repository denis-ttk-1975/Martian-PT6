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

const adv = document.querySelector('.promo__adv');

// console.log(adv);

const advElem = adv.querySelectorAll('img');

// console.log(advElem);

// const advElemHTML = adv.getElementsByTagName('img');

// console.log(advElemHTML);

const genre = document.querySelector('.promo__genre');

// console.log(genre);

const promo_bg = document.querySelector('.promo__bg');

console.log(promo_bg);

const promo_list = document.querySelectorAll('.promo__interactive-item');

// console.log(promo_list);

const prList = document.querySelector('.promo__interactive-list');

// console.log(prList);

const movieDBsorted = movieDB.movies.sort();

// console.log(movieDBsorted);

const ul = document.querySelector('ul.promo__interactive-list');

console.log(ul);

let filmName = document.querySelector('.adding__input');
let CheckBoxLovedFilm = document.querySelector('[type = "checkbox"]');
let yesButton = document.querySelector('.yes').nextElementSibling;

let delBasket = document.querySelectorAll('.delete');

for (let i = 0; i < advElem.length; i++) {
  advElem[i].remove();
}

genre.textContent = 'Драма';

promo_bg.style.backgroundImage = 'url("img/bg.jpg")';

promo_list.forEach(
  (item, key) =>
    (item.innerHTML = `${key + 1}. ${
      movieDBsorted[key]
    }<div class="delete"></div>`)
);

const filmAdd = function (nameField) {
  let shortedMovieList = [];
  if (nameField) {
    movieDB.movies.push(nameField.toUpperCase());
    movieDB.movies.sort();
    shortedMovieList = movieDB.movies.map((item, key) => {
      if (item.length > 21) {
        return key + 1 + '. ' + item.substring(0, 17) + '...';
      } else {
        return key + 1 + '. ' + item;
      }
    });

    console.log(shortedMovieList);

    if (CheckBoxLovedFilm.checked) {
      console.log('Добавляем любимый фильм');
    }

    let addedLi = document.createElement('li');
    addedLi.classList.add('promo__interactive-item');

    console.log(addedLi);
    console.log(CheckBoxLovedFilm.checked);
    ul.append(addedLi);
    const promo_listNew = document.querySelectorAll('.promo__interactive-item');
    promo_listNew.forEach(
      (item, key) =>
        (item.innerHTML = `${shortedMovieList[key]} <div class="delete"></div>`)
    );
    CheckBoxLovedFilm.checked = false;
    filmName.value = '';
  }
};

yesButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(filmName);
  console.log(filmName.value);

  filmAdd(filmName.value);
});

// console.log(filmName, CheckBoxLovedFilm, yesButton);
