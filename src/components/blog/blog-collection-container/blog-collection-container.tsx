import * as React from 'react';
import { navigate } from 'gatsby';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import Img from 'gatsby-image';

const BlogCollectionContainer = ({blogPosts, location}) => {
    return (
        <Box>
            {blogPosts.map((blogPost, key) => {

                console.log(blogPost);

                return (
                    <Box w="75%" p="15px" key={key} onClick={() => navigate(location.pathname + blogPost.node.fields.slug)}>
                        <SimpleGrid columns={2} spacing={2}>
                            <Box>
                                <Img fixed={blogPost.node.frontmatter.thumbnail.childImageSharp.fixed} />
                            </Box>

                            <Box>
                                <Heading>{blogPost.node.frontmatter.title}</Heading>
                                <Text>Author: {blogPost.node.frontmatter.author}</Text>
                                <Text>{blogPost.node.timeToRead} { blogPost.node.timeToRead > 1 ? "minutes" : "minute"} to read</Text>
                            </Box>
                        </SimpleGrid>
                    </Box>
                )
            })}
        </Box>
        
       
    )
}

export default BlogCollectionContainer;