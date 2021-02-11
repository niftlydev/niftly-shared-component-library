import React from 'react';
import { ColumnDetailsInfo } from '../footer';
import { Box, List, ListItem, Center } from '@chakra-ui/react';
import Img from 'gatsby-image';

const FooterColumnInfo = ({columnDetailsInfo}: {columnDetailsInfo: ColumnDetailsInfo}) => {
    return (
        <Box>
            <List>
                <ListItem>
                    <Center>
                        <Img style={{height: "50px", width: "100px"}}
                            fluid={columnDetailsInfo.logo.childImageSharp.fluid}
                        />
                    </Center>
                </ListItem>
                <ListItem><Center>{columnDetailsInfo.address}</Center></ListItem>
                <ListItem><Center>{columnDetailsInfo.phoneNumber}</Center></ListItem>
            </List>
        </Box>
    )
}

export default FooterColumnInfo;