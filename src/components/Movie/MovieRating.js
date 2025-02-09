import React from 'react';
import './MovieRating.css'
const MovieRating = ({ rating }) => {
  const stars = rating / 2 // 10점 만점 → 5점 환산
  const fullStars = Math.floor(stars); // 소수점 버림
  const isHalfStar = stars - fullStars >= 0.5; // 0.5 별 여부

  return (
    <div className="movie-rating">
      {[...Array(fullStars)].map((_, index) => (
        <img key={index} src={'./star.svg'} alt={'star'} className="star-icon" />
      ))}

      {/* 반 별 추가 (0.5점이 포함된 경우) */}
      {isHalfStar && <img src={'./halfstar.svg'} alt={'star'} className="star-icon" />}

      <span>{rating}/10</span>
    </div>
  );
};


export default MovieRating;