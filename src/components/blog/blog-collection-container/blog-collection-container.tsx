import * as React from 'react';
import { navigate } from 'gatsby';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';
import moment from 'moment'
import {isMobile} from 'react-device-detect'


const BlogCollectionContainer = ({blogPosts, location}) => {
    return (
        <Box>
            {blogPosts.map((blogPost, key) => {

                return (
                    <Box border="1px solid black" key={key} onClick={() => navigate(location.pathname + blogPost.node.fields.slug)}>
                        <SimpleGrid columns={isMobile ? 1 : 2} spacing={3}>
                            <Img fixed={blogPost.node.frontmatter.thumbnail.childImageSharp.fixed} />

                            <Box>

                                <Box p="10px">
                                    <Text>Author: {blogPost.node.frontmatter.author}</Text>
                                    <Text>{moment(blogPost.node.frontmatter.date).format("MMM Do YY")} *  {blogPost.node.timeToRead} { blogPost.node.timeToRead > 1 ? "mins" : "min"}</Text>                      
                                </Box>

                                <Box p="10px">
                                    <Heading>{blogPost.node.frontmatter.title}</Heading>
                                </Box>

                                <Box p="10px">
                                    <Text>{blogPost.node.frontmatter.preview}</Text>
                                </Box>
                                                        
                            </Box>
                        </SimpleGrid>
                    </Box>
                )
            })}
        </Box>
        
       
    )
}

export default BlogCollectionContainer;