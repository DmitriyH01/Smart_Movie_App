import { Fragment } from "react";
import { useSelector } from "react-redux";

const MoviesPosters = () => {
  const movies = useSelector((state) => state.moviesFromApi);
  return <Fragment>{createMoviePosters(movies)}</Fragment>;
};

const createMoviePosters = (postersInfo) => {
  console.log(postersInfo);
  return (
    <Fragment>
      {postersInfo[0].map((poster, index) => {
        // console.log(postersInfo[0].length);
        // console.log(poster.title);
        return (
          <div>
            <ul>
              <li key={poster.title}>
                <h2>{poster.title}</h2>
                {/* <img src={card.images.medium} alt={card.name}></img> */}
                {/* <span> Nation: {card.nation}</span> */}
                {/* <span> Type: {card.type}</span> */}
              </li>
            </ul>
          </div>
        );
      })}
    </Fragment>
  );
};

export default MoviesPosters;
