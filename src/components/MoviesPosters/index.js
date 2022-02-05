import { Fragment } from "react";
import { useSelector } from "react-redux";

const MoviesPosters = () => {
  const movies = useSelector((state) => state.moviesFromApi);
  return (
    <Fragment>
      <div>
        <ul>{createMoviePosters(movies)} </ul>
      </div>
    </Fragment>
  );
};

const createMoviePosters = (postersInfo) =>
  postersInfo[0].map((poster, index) => {
    // console.log(poster);
    return (
      <li key={index}>
        <h2> {poster.title}</h2>
        {/* <img src={} alt={poster.poster_path}></img> */}
        <span>backround_img:{poster.backdrop_path}</span>
        <br></br>
        <span>{poster.overview}</span>
        <br></br>
        <span> Vote IMB: {poster.vote_average}</span>
      </li>
    );
  });
export default MoviesPosters;
