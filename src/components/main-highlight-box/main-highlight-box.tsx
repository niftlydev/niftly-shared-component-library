import * as React from 'react';
import {Heading, Text, Box, Button, Center, SimpleGrid} from '@chakra-ui/react';

export const MainHighlightBox = ({heading, highlight, body,img}: any) => {

    return (
        <SimpleGrid columns={2}>
            <Box h={"100vh"}>
                <Center h="100%">
                    <Box>
                        {React.cloneElement(heading)}
                        {React.cloneElement(body)}
                        {React.cloneElement(highlight)}
                    </Box>          
                </Center>
            </Box>

            {img ? <Box>
                <Center h="100%">
                    {React.cloneElement(img)}
                </Center>
            </Box>: <></>}
        </SimpleGrid>
    )
}
