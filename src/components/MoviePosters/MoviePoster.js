import React from 'react';

const MoviePoster = ({ poster }) => {
  const { title, backdropPath, overview, voteAverage } = poster;

  return (
    <li>
      <h2>{title}</h2>
      {/* <img src={} alt={poster.poster_path}></img> */}
      <span>backround_img:{backdropPath}</span>
      <br></br>
      <span>{overview}</span>
      <br></br>
      <span> Vote IMB: {voteAverage}</span>
    </li>
  );
};

export default MoviePoster;
