/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

// console.log(promo_bg);

const promo_list = document.querySelectorAll('.promo__interactive-item');

const movieDBsorted = movieDB.movies.sort();

// console.log(movieDBsorted);

for (let i = 0; i < advElem.length; i++) {
  advElem[i].remove();
}

genre.textContent = 'Драма';

promo_bg.style.backgroundImage = 'url(../img/bg.jpg)';

promo_list.forEach((item, key) => (item.textContent = movieDBsorted[key]));
