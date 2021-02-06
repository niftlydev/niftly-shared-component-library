import React, { useState, useEffect } from 'react';
import { Box, Grid, Icon, GridItem, Image, Center } from '@chakra-ui/react';
import Slider from "react-slick";
import './styles/image-slider-styles.scss';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';

export const ImageSlider = ({images, padding, height, width}: {images: Array<any>, padding: string, height: string, width: string}) => {

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

    return (
        <Box p={padding}>
            <Slider {...settings}>
                {images.map((image) => {
                    return (
                        <Box p="5px">
                            <Center>
                                <Image h={height} w={width} objectFit="cover" src={image.image} />
                                {/* <GatsbyImage image={image.image} alt="" /> */}
                            </Center>                          
                        </Box>
                    )
                })}
            </Slider>
        </Box>
    )
}
