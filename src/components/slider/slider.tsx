import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import Slider from "react-slick";
import './styles/image-slider-styles.scss';
import Img from 'gatsby-image';


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
                        <Center>
                            <Img
                               fluid={image.image.childImageSharp.fluid}
                                alt={image.alt}
                            />
                        </Center>                                    
                    )
                })}
            </Slider>
        </Box>
    )
}


