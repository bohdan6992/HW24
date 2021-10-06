// Задания на урок:
// Все изминения реализовать только при помощи JS
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)+

const adv = document.querySelector(".promo__adv");
while (adv.firstChild) {
  adv.removeChild(adv.firstChild);
}

// 2) Изменить жанр фильма, поменять "комедия" на "эпическая фантастика"+
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'эпическая фантастика';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.+
const background = document.querySelector('.promo__bg');
background.style.backgroundImage = "url(img/bg.jpg)";

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту (загуглить специальный метод массивов)
const movieDB = {
  movies: [
    "ГЛАВНЫЙ ГЕРОЙ",
    "ГЛАДИАТОР",
    "ГОДЗИЛЛА 2",
    "ВРЕМЯ",
    "НИКТО"
  ]
};

const sortedList = movieDB.movies.sort();
const listItems = document.querySelectorAll('.promo__interactive-item');

sortedList.forEach((el, index) => {
  listItems[index].innerText = el;
});

// 5) Добавить нумерацию выведенных фильмов

// const ul = document.getElementsByTagName("ul")
// ol = document.createElement("ol");

// li = ul.querySelectorAll('li');
// for(let i=0;i<li.length;i++) {
//   ol.appendChild(li[i]);
// }

