import React from "react";
import "./MovieReleaseData.css";

const MovieReleaseData = ({ releaseData }) => {
  return (
    <div className="movie-release-data">
      {/*svg사이즈 적용하는 거 물어보기*/}
      <img src={'./calender.svg'} alt="Calendar" className="release-icon" />
      <span>{releaseData}</span>
    </div>
  );
};

export default MovieReleaseData;
