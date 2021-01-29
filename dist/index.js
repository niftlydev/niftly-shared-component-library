import React from 'react';

import { Box, Image, Center } from '@chakra-ui/react';

import Slider from "react-slick";

import './styles/image-slider-styles.scss';

export const ImageSlider = ({ images, padding, height, width }) => {

    const settings = {

        dots: true,

        infinite: true,

        speed: 1000,

        slidesToShow: 1,

        slidesToScroll: 1,

        autoplay: true,

        centerMode: true,

        adaptiveHeight: true,

        fade: true,

        arrows: true,

        autoplaySpeed: 5000,

        className: 'slides'

    };

    return (React.createElement(Box, { p: padding },

        React.createElement(Slider, Object.assign({}, settings), images.map((image) => {

            return (React.createElement(Box, { p: "5px" },

                React.createElement(Center, null,

                    React.createElement(Image, { h: height, w: width, objectFit: "cover", src: image }))));

        }))));

};

