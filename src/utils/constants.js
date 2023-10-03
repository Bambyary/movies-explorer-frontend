// Функция, которая переводит длительность фильма в формат часы:минуты
export function convertDuration (duration) {
    const hours = Math.floor(duration / 60); // Считаем количество часов
    const minutes = duration % 60; // Считаем количество минут

    return `${hours}ч ${minutes}м`;
}

//Функция, определяющая сколько карточек отобразить
export function getFilmsToShow () {

    if(window.innerWidth >= 1000) {
      return 12;
    }
  
    if(window.innerWidth < 1000 && window.innerWidth > 550) {
      return 8;
    }
  
    if (window.innerWidth <= 550) {
      return 5;
    }
  }

//Функция, которая добавляет определённое количество фильмов к найденным фильмам
export function handleMoreFilms (filmsToShow, setFilmsToShow) {
    const newFilmsToShow = window.innerWidth >= 1000 ? filmsToShow + 3 : filmsToShow + 2;
    setFilmsToShow(newFilmsToShow);
}