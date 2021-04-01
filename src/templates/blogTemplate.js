import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout";
import { Box, Center, Text, Heading, Icon, HStack } from '@chakra-ui/react';
import Img from 'gatsby-image';
import { FaRegEnvelope, FaFacebookF, FaFacebookMessenger, FaPinterestP, FaRedditAlien, FaTwitter } from 'react-icons/fa';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import SEO from '../components/seo/seo';

export default function Template({
  data, location // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(data);

  return (
    <Layout>
      <SEO
          title={frontmatter.title}
          description={frontmatter.preview || 'n/a'}
          image={frontmatter.thumbnail.childImageSharp.fluid.src}
          pathname={location.href}
          article
        />
      <Box h="100vh" pr="25px" pl="25px">
        <Box p="10px">
            <Center>
              <Img fixed={frontmatter.thumbnail.childImageSharp.fixed} />
            </Center>         
          </Box>

          <Box p="10px">
            <Center>
              <Heading>{frontmatter.title}</Heading>
            </Center>        
          </Box>

          <Box p="10px">
            <Center>
              <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
            </Center>
          </Box>

          <Box p="10px">

            <HStack spacing="10px">
              <Box>
                <EmailShareButton url={location.href} subject={frontmatter.title} body={frontmatter.preview}>
                  <Icon as={FaRegEnvelope} />
                </EmailShareButton>
              </Box>
              
              <Box>
                <FacebookShareButton url={location.href} quote="asdfadsfadfafd" hashtag="whatup">
                  <Icon as={FaFacebookF} />
                </FacebookShareButton>
              </Box>

              <Box>
                <FacebookMessengerShareButton url={location.href} >
                  <Icon as={FaFacebookMessenger} />
                </FacebookMessengerShareButton>
              </Box>

              <Box>
                <PinterestShareButton url={location.href}>
                  <Icon as={FaPinterestP} />
                </PinterestShareButton>
              </Box>

              <Box>
                <RedditShareButton url={location.href}>
                  <Icon as={FaRedditAlien} />
                </RedditShareButton>
              </Box>

              <Box>
                <TwitterShareButton url={location.href}>
                  <Icon as={FaTwitter} />
                </TwitterShareButton>
              </Box>
            </HStack>

          </Box>

      </Box>
      
        
      
    </Layout>
    
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        preview
        thumbnail {
          childImageSharp {
            fluid{
							src
            }
            fixed(width: 700, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`