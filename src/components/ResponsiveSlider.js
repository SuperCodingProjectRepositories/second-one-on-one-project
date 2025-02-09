import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ResponsiveSlider.css'
import MovieCard from "./Movie/MovieCard";

const ResponsiveSlider = ({movies}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // 기본값
        slidesToScroll: 5,
        accessibility: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1224, // 화면 너비 1024px 이하일 때
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024, // 화면 너비 1024px 이하일 때
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800, // 화면 너비 600px 이하일 때
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
            ,
            {
                breakpoint: 600, // 화면 너비 600px 이하일 때
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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