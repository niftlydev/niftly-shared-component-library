import * as React from 'react';
import {Box, Flex, Center, Spacer, Grid, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter} from '@chakra-ui/react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {isMobile} from 'react-device-detect';

export interface LinkToPage {
    text: string;
    slug: string
}

export interface StaticNavbarProps {
    links: Array<LinkToPage>, 
    rightLink: LinkToPage, 
    logoImg: any
}

const StaticNavbar = ({links, rightLink, logoImg}: StaticNavbarProps) => {
    return (
        <Box alignItems="center" bg="brand.navbarColor" w="100%" h="80px" p={4}>
            {isMobile ? <MobileNavbar links={links} rightLink={rightLink} logoImg={logoImg} /> : <DesktopNavbar links={links} rightLink={rightLink} logoImg={logoImg} /> }
        </Box>
    )
}

const DesktopNavbar = ({links, rightLink, logoImg}: StaticNavbarProps) => {

    return (
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
    )
}

const MobileNavbar = ({links, rightLink, logoImg}: StaticNavbarProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Box>box</Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default StaticNavbar;