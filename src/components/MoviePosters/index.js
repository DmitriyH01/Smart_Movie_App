import React from 'react';

import MoviePoster from './MoviePoster';

const MoviePosters = ({ posters }) => {
  return (
    <ul>
      {posters.map((poster) => (
        <MoviePoster key={poster.title} poster={poster} />
      ))}
    </ul>
  );
};

export default MoviePosters;
