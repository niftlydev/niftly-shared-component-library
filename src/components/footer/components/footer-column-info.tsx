import React from 'react';
import { ColumnDetailsInfo } from '../footer';
import { Box, List, ListItem, Image, Center } from '@chakra-ui/react';

const FooterColumnInfo = ({columnDetailsInfo}: {columnDetailsInfo: ColumnDetailsInfo}) => {
    return (
        <Box>
            <List>
                <ListItem><Center><Image boxSize="50px" src={columnDetailsInfo.logo} /></Center></ListItem>
                <ListItem><Center>{columnDetailsInfo.address}</Center></ListItem>
                <ListItem><Center>{columnDetailsInfo.phoneNumber}</Center></ListItem>
            </List>
        </Box>
    )
}

export default FooterColumnInfo;