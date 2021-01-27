import React from 'react';
import { ColumnDetailsLinks } from '../footer';
import { Box, List, ListItem, Center, Link, Text } from '@chakra-ui/react';

const FooterColumnLinks = ({columnDetailsLinks}: {columnDetailsLinks: Array<ColumnDetailsLinks>}) => {
    return (
        <Box>
            <List>
                {columnDetailsLinks.map((link) => {
                   return <ListItem><Center><Text>{link.text}</Text></Center></ListItem>
                })}
            </List>
        </Box>
    )
}

export default FooterColumnLinks;