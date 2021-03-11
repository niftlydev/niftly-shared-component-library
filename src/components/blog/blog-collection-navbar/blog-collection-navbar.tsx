import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'gatsby';

const BlogCollectionNavbar = ({collections, location}) => {
 
    return (       
        <Box>
            {collections.map((collection, key) => {
                return (
                    <Box p="10px" key={key} as={Link} to={"/blog/" + collection.replace(/\s+/g, '-').toLowerCase()}>{collection}</Box>
                )
            })} 
        </Box>
    )
}

export default BlogCollectionNavbar;