import React from 'react';
import './MovieGenre.css'
const MovieGenre = ({genre}) => {
  return (
    <div className="movie-genre">
      {genre}
    </div>
  );
};

export default MovieGenre;