import React from 'react';

const MovieRating = ({rating}) => {
    return (
        <div>
            <p className="movie-rating">⭐ {rating}</p>
        </div>
    );
};

export default MovieRating;