import React from "react";
import { MainImageURL } from "../../constant/URLs";

const MoviePoster = ({ poster }) => {
  const { title, backdropPath, overview, voteAverage } = poster;

  return (
    <li className="posters_list_item">
      <h2>{title}</h2>
      <img src={MainImageURL + backdropPath} alt={poster.poster_path}></img>
      <br></br>
      <span>{overview}</span>
      <br></br>
      <span> Vote IMB: {voteAverage}</span>
    </li>
  );
};

export default MoviePoster;
