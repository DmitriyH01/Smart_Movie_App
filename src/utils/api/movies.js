import { MOVIES } from "../../constant/fields";

export const performMovies = (posters) =>
  posters.map((movie) => ({
    backdropPath: movie[MOVIES.BACKDROP_PATH],
    overview: movie[MOVIES.OVERVIEW],
    posterPath: movie[MOVIES.POSTER_PATH],
    releaseDate: movie[MOVIES.RELEASE_DATE],
    title: movie[MOVIES.TITLE],
    voteAverage: movie[MOVIES.VOTE_AVERAGE],
  }));
// console.log(posters);
// };
