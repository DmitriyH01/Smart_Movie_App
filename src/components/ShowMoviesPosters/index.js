import { Fragment, useEffect } from "react";
import { MainURL, ApiKey, PopularMovies } from "../../constant/URLs";
import connectToApi from "../../connection/connectApi";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader";
import MoviesPosters from "../MoviesPosters";

const ShowMoviesPosters = () => {
  const movies = useSelector((state) => state.moviesFromApi); //

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectToApi(`${MainURL + PopularMovies + ApiKey}`));
  }, []);

  if (movies === null) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <MoviesPosters />
    </Fragment>
  );
};

export default ShowMoviesPosters;
