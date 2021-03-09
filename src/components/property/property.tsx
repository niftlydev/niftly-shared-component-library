import React from 'react';
import {Box, Image, Text} from '@chakra-ui/react';
import Img from 'gatsby-image';

export const Property = ({image, imageAlt, address, price}) => {

    return (
        <Box width="100%" h="100%" position="relative">
            <Img style={{height: "75%", width: "90%"}} fluid={image.childImageSharp.fluid}/>
            <Box p="5" backgroundColor="rgba(0,0,0,.2)" display="flex" boxShadow="0px -3px 2px rgba(0,0,0,.2)" justifyContent="space-around" flexDirection="column" w="100%" h="35%" top="65%" left={0} position="absolute" >
                <Text fontWeight="bold"  zIndex={1000} color="white">{address}</Text>
                <Text zIndex={1000} color="white">{price}</Text>
            </Box>
        </Box>

    )
}