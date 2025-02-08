import React from 'react';

const MovieReleaseData = ({releaseData}) => {
    return (
        <div>
            <p className="movie-release-date">📅 {releaseData}</p>
        </div>
    );
};

export default MovieReleaseData;