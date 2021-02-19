import * as React from 'react';
import {Heading, Text, Box, Button, Center, SimpleGrid} from '@chakra-ui/react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

export const MainHighlightBox = ({data}) => {

    if (data.image) {
        return (
            <SimpleGrid columns={2}>
                <Box h={"100vh"}>
                    <Center h="100%">
                        <Box>
                            <Heading>{data.heading}</Heading>
                            <Text>{data.body}</Text>
                            <Button as={Link} to={data.action_slug} size="lg" colorScheme="green" mt="24px">
                                {data.action_text}
                            </Button>
                        </Box>          
                    </Center>
                </Box>
    
                <Box>
                    <Center h="100%">
                        <Img style={{height: "75%", width: "90%"}} fluid={data.image.childImageSharp.fluid} />
                    </Center>
                </Box>
            </SimpleGrid>
        )
    }
    else {
        return (
            <SimpleGrid columns={1}>
                <Box h={"100vh"}>
                    <Center h="100%">
                        <Box>
                            <Heading>{data.heading}</Heading>
                            <Text>{data.body}</Text>
                            <Button as={Link} to={data.action_slug} size="lg" colorScheme="green" mt="24px">
                                {data.action_text}
                            </Button>
                        </Box>          
                    </Center>
                </Box>
            </SimpleGrid>
        )
    }
    
}
