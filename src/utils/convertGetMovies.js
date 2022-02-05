const convertGetMoviesFromApi = (movies) => {
  const filteredMovies = [...Array(20).keys()];
  movies.forEach((movie, index) => {
    filteredMovies[index] = {
      backdrop_path: movie.backdrop_path,
      original_title: movie.original_title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      vote_average: movie.vote_average,
    };
  });
  return filteredMovies;
};

export default convertGetMoviesFromApi;
