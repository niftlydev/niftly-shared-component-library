import React, { ReactElement, useRef } from 'react';
import {Box, Divider, Heading, Text, Image, Center} from '@chakra-ui/react'
import Img from 'gatsby-image';

interface ListingHighlightProps {
    background: ReactElement,
    highlight: ReactElement
}

export const ListingHighlight = ({background, highlight}: ListingHighlightProps) => {

    return(
        <Box>
            <Box position="relative" left={0} top={0}>
                {React.cloneElement(background)}
                <Center >
                    <Box position="absolute" top="70%" width="100%">
                        <Center>
                            {React.cloneElement(highlight)}
                        </Center>
                    </Box>
                </Center>
            </Box>
        </Box>
    )
}