import React from 'react';
import './MovieCardButton.css'
const MovieCardButton = ({label}) => {
    return (
        <div className="movie-card-buttons">
            <button>
              {label}
            </button>
        </div>
    );
};

export default MovieCardButton;