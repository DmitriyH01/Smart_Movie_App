import { Fragment } from "react";
import { MainURL, ApiKey, PopularMovies } from "../../constant/URLs";
import connectToApi from "../../connection/connectApi";

const MainContainer = () => {
  //   console.log(`${MainURL}`);
  connectToApi(`${MainURL + PopularMovies + ApiKey}`);
  return (
    <Fragment>
      <main>
        <ul></ul>
      </main>
    </Fragment>
  );
};

export default MainContainer;
