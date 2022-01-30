import { Fragment } from "react";
import MoviesContainer from "../MoviesContainer";

const MainContainer = () => {
  // connectToApi(`${MainURL + PopularMovies + ApiKey}`);
  return (
    <Fragment>
      <MoviesContainer />
    </Fragment>
  );
};

export default MainContainer;
