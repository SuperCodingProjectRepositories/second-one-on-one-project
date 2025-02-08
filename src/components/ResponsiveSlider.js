import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ResponsiveSlider.css'
import MovieCard from "./Movie/MovieCard";
import moviesData from "../models/moviesData";

const ResponsiveSlider = () => {
    const [movies, setMovies] = React.useState(moviesData);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 기본값
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024, // 화면 너비 1024px 이하일 때
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600, // 화면 너비 600px 이하일 때
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <div className="responsive-slider-container">
            <Slider {...settings}>
                {movies.map((data) => (
                    <div key={data.id} className="responsive-slider-item-wrapper">
                        <MovieCard movie={data} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ResponsiveSlider;