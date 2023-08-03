//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?:', '');

//2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//3

const a = prompt('Один из просмотренных фильмов', '')
const b = prompt('На сколько его оцените?', '')
const c = prompt('Один из просмотренных фильмов', '')
const d = prompt('На сколько его оцените?', '')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;11

console.log(personalMovieDB);
