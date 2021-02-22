import * as React from 'react';
import {Box, Flex, Center, Spacer, Grid, Image, Button} from '@chakra-ui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export interface LinkToPage {
    text: string;
    slug: string
}

const StaticNavbar = ({links, rightLink, logoImg}: {links: Array<LinkToPage>, rightLink: LinkToPage, logoImg: any}) => {

    return (
        <Box alignItems="center" bg="brand.navbarColor" w="100%" h="80px" p={4}>
            <Flex>
                <Box h="50px" as={Link} to="/" bg="brand.navbarColor">
                    <Center>
                        <Img style={{height: "50px", width: "100px"}}
                            fluid={logoImg.childImageSharp.fluid}
                        />
                    </Center>                 
                </Box>
                <Spacer />
                <Box h="10px" bg="brand.navbarColor">
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        {links.map(link => {
                            return <Box h="10px" w="100%"><Center><Button variant="navbar-btn" color="white" as={Link} to={link.slug}>{link.text}</Button></Center></Box>
                        })}
                    </Grid>
                </Box>
                <Spacer />
                <Box h="10px" bg="brand.navbarColor">
                    <Center><Button variant="navbar-btn" color="white" as={Link} to={rightLink.slug}>{rightLink.text}</Button></Center>
                </Box>    
            </Flex>                        
        </Box>
    )
}

export default StaticNavbar;