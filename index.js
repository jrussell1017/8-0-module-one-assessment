/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
// set input & output  
  let movieNameArr = []

  // edge case handling
  if(!movies.length) {
    return []
  }
// loop through movies
  for(let i = 0; i < movies.length; i++) {
    //push title of movies into array
    movieNameArr.push(movies[i].title) 
  }
  return movieNameArr
}

console.log(getAllMovieTitles(movies))

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // guard clause
  if(!movies.length) {
    return 0
  }
  // set the first metaScore to be compared to
  let highestMeta = +movies[0].metascore
// loop though movies
  for(let i = 1; i < movies.length; i++) {
    //set variable for readbility
      let current = +movies[i].metascore
    // ask conditional
      if(highestMeta < current) {
      highestMeta = current
    }
  }
  return highestMeta
}

console.log(getHighestMetascore(movies))
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

// helper function to help round number
function roundNum(num){
  return Number(num.toFixed(2));
}

function getAverageIMDBRating(movies) {
  // guard clause
  if(!movies.length) {
    return 0
  }
//set inputs and output
  let avg = 0
// loop though movies
  for(let i = 0; i < movies.length; i++) {
    // set variable for readability and change rating from string to num
    let movieRating = Number(movies[i].imdbRating)
    // add all ratings and divide by number of movies
    avg += movieRating / movies.length
  }
  return roundNum(avg)
}

console.log(getAverageIMDBRating(movies))
/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  // guard clause
  if(!movies.length) {
    return {}
  }
// set input and output
  let movieObj = {}
// loop though movies
  for(let movie of movies) {
    // set key to be the movie rating
    let movieRating = movie.rated
// ask conditions
    if(movieRating) {
      // if there is no movie obj with rating key create it and set it equal to 1
      if(!movieObj[movieRating]) {
        movieObj[movieRating] = 1
      } else {
        // if there is a rating another movie with that rating then increment by 1
        movieObj[movieRating] += 1
      }
    }
  }
  return movieObj
}

console.log(countByRating(movies))
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  // guard clause
  if(!movies.length) {
    return null
  }
  // set input and output
  let foundId = null 
  // loop through movies
  for(let i = 0; i < movies.length; i++) {
    // if the imbd rating matches the id given
    if(movies[i].imdbID === id) {
      // reassign foundId to the movie
      foundId = movies[i]
    }
  }
  // return movie of associated id
  return foundId
}

console.log(findById(movies, "tt3606756"))
console.log(findById(movies, "tt1979376"))

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  // guard clause
  if(!movies.length) {
    return []
  }
// set inputs and outputs
  let movieFilter = []
// loop though movies
    for (let movie of movies){
      // use .toLowerCase to deal with case sensitivity
      // if there are movies with the same genre as the genre given 
      if (movie.genre.toLowerCase().includes(genre.toLowerCase())){
        // push the movie into movie filter
        movieFilter.push(movie)
      }
    }
    // return your filtered movies
  return movieFilter
}

console.log(filterByGenre(movies, "Mystery"))
console.log(filterByGenre(movies, "Horror"))
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  // set your inputs and out puts
  let releaseDateArr = []
  // loop though your movies
  for(let movie of movies) {
    // set a variable for readability of the modified released date with just year and turn strung to num
    let modifiedReleaseDate = movie.released.split(" ").slice(2)
    // if the release dates are less than or equal to the year given 
    if(modifiedReleaseDate <= year) {
      // push said movies
      releaseDateArr.push(movie)
    }
  }
  // return the movies
  return releaseDateArr
}

console.log(getAllMoviesReleasedAtOrBeforeYear(movies, 2000))

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  // set your inputs and ouputs
  let largestBox = 0
  let movieTitle = null

  // loop through movies 
  for(let movie of movies) {
    // change box office into strict num for comparison
    let modified = +movie.boxOffice.slice(1).split(",").join("")
    // ask your conditional
    if(modified > largestBox) {
      // reassign and accum
      largestBox = modified
      movieTitle = movie.title
    }
  } 
  // return movie title
  return movieTitle
}

console.log(getBiggestBoxOfficeMovie(movies))

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
