import React from 'react';
import MovieRating from "./MovieRating";
import MovieReleaseData from "./MovieReleaseData";
import MovieCardButton from "./MovieCardButton";
import "./MovieCard.css"
import MovieGenre from "./MovieGenre";

const MovieCard = ({movie}) => {
  return (
    <div className="movie-card">
      <div className="movie-card-container">
        <img
          src={movie.poster_path}
          alt={movie.title}
        />
        <div className="movie-card-content-container">
          <div className="movie-card-title">{movie.title}</div>

          <div className="movie-card-genre-container">
            {movie.genres.map((genre,index) => (
              <MovieGenre key={index} genre={genre}/>
            ))}
          </div>

          <div className="movie-rating-release-container">
            <MovieRating rating={movie.vote_average}/>
            <MovieReleaseData releaseData={movie.release_date}/>
          </div>

          <div className="movie-card-buttons-container">
            <MovieCardButton label={"상세보기"}/>
            <MovieCardButton label={"좋아요"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
