import * as React from 'react';
import {Heading, Text, Box, Button, Flex, Center, SimpleGrid} from '@chakra-ui/react';
import Img from 'gatsby-image';

export const MainHighlightBox = ({heading, body, actionText, img}) => {

    return (
        <SimpleGrid columns={2}>
            <Box h={"100vh"}>
                <Center h="100%">
                    <Box>
                        <Heading>{heading}</Heading>
                        <Text>{body}</Text>
                        <Button size="lg" colorScheme="green" mt="24px">
                            {actionText}
                        </Button>
                    </Box>          
                </Center>
            </Box>

            <Box>
                <Center h="100%">
                    <Img style={{height: "75%", width: "90%"}} fluid={img.childImageSharp.fluid} />
                </Center>
            </Box>
        </SimpleGrid>
    )
}
