import React from 'react';
import MovieRating from "./MovieRating";
import MovieReleaseData from "./MovieReleaseData";
import MovieDetailButton from "./MovieDetailButton";
import MovieFavoriteButton from "./MovieFavoriteButton";
import "./MovieCard.css"
const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img
                src={movie.poster_path}
                alt={movie.title}
            />
            <div className="movie-card-container">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genres}</p>
                <MovieRating rating={movie.rating} />
                <MovieReleaseData releaseData={movie.release} />
                <MovieDetailButton />
                <MovieFavoriteButton />
            </div>
        </div>
    );
};

export default MovieCard;
