'use strict';

const movies = require('./movies');

// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow 

// examples for demo
const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];
const standings = [
  { team: 'Lions', score: 4 },
  { team: 'Tigers', score: 1 },
  { team: 'Bears', score: 5 },
  { team: 'OhMy...', score: 3 },
];

//Demo:  stay tuned...



// Complete for Code Challenge 28
function sortYear(movies) {
  for (let i = 1; i < movies.length; i++) {
    let j = i - 1;
    let temp = movies[i];
    while (j >= 0 && movies[j].year > temp.year) {
      movies[j + 1] = movies[j];
      j--;
    }
    movies[j + 1] = temp;
  }
  return movies;
}


function sortTitle(movies) {

  for (let i = 1; i < movies.length; i++) {
    let j = i - 1;
    let temp = movies[i];
    while (j >= 0 && movies[j].title > temp.title) {
      if (movies[j].title.includes('The')) {
        movies[j].title = movies[j].title.replace('The ', '');
      }
      if (movies[j + 1].title.includes('The')) {
        movies[j + 1].title = movies[j + 1].title.replace('The ', '');
      }
      movies[j + 1] = movies[j];
      j--;
    }
    movies[j + 1] = temp;
  }
  return movies;
}

function inGenre(movies, genres) {

  let genresMovies = [];

  for (let i = 1; i < movies.length; i++) {
    if (movies[i].genres.includes(genres)) {
      genresMovies.push(movies[i]);
    }
  }


  for (let i = 1; i < genresMovies.length; i++) {
    let j = i - 1;
    let temp = genresMovies[i];

    if (genresMovies[j].title.includes('The')) {
      genresMovies[j].title = genresMovies[j].title.replace('The ', '');
    }

    if (genresMovies[j + 1].title.includes('The')) {
      genresMovies[j + 1].title = genresMovies[j + 1].title.replace('The ', '');
    }

    while (j >= 0 && genresMovies[j].title > temp.title) {
      console.log('INSIDE THE WHILE LOOP');

      genresMovies[j + 1] = genresMovies[j];
      j--;
    }
    genresMovies[j + 1] = temp;
  }
  return genresMovies;
}

module.exports = { sortYear, sortTitle, inGenre };
