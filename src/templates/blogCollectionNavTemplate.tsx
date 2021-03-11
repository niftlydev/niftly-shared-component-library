import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Center } from '@chakra-ui/react';
import BlogCollectionContainer from '../components/blog/blog-collection-container/blog-collection-container';
import BlogCollectionNavbar from '../components/blog/blog-collection-navbar/blog-collection-navbar';
import Layout from "../components/layout/layout";


export default function Template({
    data, pageContext, location // this prop will be injected by the GraphQL query below.
  }) {
    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { edges } = allMarkdownRemark

    const collections = ["Selling Your Home", "Buying a Home", "Real Estate Tips", "Discover OKC"]
    return (
        <Layout>
            <Box h="100vh">
                <Box pt="10px">
                    <BlogCollectionNavbar collections={collections} location={location} />
                </Box>

                <Box pt="20px">
                    <Center><Heading>{pageContext.collection}</Heading></Center>
                </Box>

                <Center>
                    <Box p="10px">
                        <BlogCollectionContainer blogPosts={edges} location={location} />
                    </Box>
                </Center>
                    

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
            preview
            thumbnail {
                childImageSharp {
                    fixed(width: 500, height: 300) {
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