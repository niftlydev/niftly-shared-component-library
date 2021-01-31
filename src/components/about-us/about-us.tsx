import React from 'react';
import {Box, Center, Heading} from '@chakra-ui/react';

export const AboutUs = ({children}) => (
    <Box flex="1" h="100%" display="flex" flexDirection="column" justifyContent="space-around" paddingRight="10%" paddingLeft="10%" paddingTop="2.5%">
        <Center>
            <Heading size="4xl">About Us</Heading>
        </Center>
        {children}
    </Box>
)