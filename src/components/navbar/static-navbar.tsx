import * as React from 'react';
import {Box, Flex, Center, Spacer, Grid, Image, Button} from '@chakra-ui/react';
import { Link } from 'gatsby';

export interface LinkToPage {
    text: string;
    slug: string
}

const StaticNavbar = ({links, rightLink, logoImg}: {links: Array<LinkToPage>, rightLink: LinkToPage, logoImg: any}) => {
    
    return (
        <Box alignItems="center" bg="brand.navbarColor" w="100%" p={4}>
            <Flex>
                <Box bg="brand.navbarColor">
                    <Center>
                        <Image boxSize="50px" src={logoImg} />
                    </Center>                 
                </Box>
                <Spacer />
                <Box bg="brand.navbarColor">
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        {links.map(link => {
                            return <Box w="100%"><Center><Button colorScheme="brand" color="white" as={Link} to={link.slug}>{link.text}</Button></Center></Box>
                        })}
                    </Grid>
                </Box>
                <Spacer />
                <Box bg="brand.navbarColor">
                    <Center><Button colorScheme="brand" color="white" as={Link} to={rightLink.slug}>{rightLink.text}</Button></Center>
                </Box>    
            </Flex>                        
        </Box>
    )
}

export default StaticNavbar;