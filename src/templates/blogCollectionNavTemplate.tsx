import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Center } from '@chakra-ui/react';
import BlogCollectionContainer from '../components/blog/blog-collection-container/blog-collection-container';
import Layout from "../components/layout/layout";


export default function Template({
    data, pageContext, location // this prop will be injected by the GraphQL query below.
  }) {
    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { edges } = allMarkdownRemark

    return (
        <Layout>
            <Box>
                <Center><Heading>{pageContext.collection}</Heading></Center>

                    <Box>
                        <BlogCollectionContainer blogPosts={edges} location={location} />
                    </Box>

            </Box>
        </Layout>
     
    )
  }
  
  
  export const pageQuery = graphql`
  query getAllForCollection($collection: String) {
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {collection: {eq: $collection}}}) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
            thumbnail {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
          }
        }
      }
    }
  }
  `