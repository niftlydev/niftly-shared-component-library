import * as React from "react"
import { HighlightBox } from "../components/highlight-box/highlight-box";
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider/slider';
import { ServicesBoxFactory } from '../utils/front-page/services-box';
import Layout from '../components/layout/layout';
import {Box, Image, Text, Center} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { MainHighlightBox } from '../components/main-highlight-box/main-highlight-box';

// markup
const IndexPage = ({data}) => {

  return (
    <main>
      <title>Home Page</title>

        <Layout>

          <Box pb="20px" pr="20px" pl="20px">
            <MainHighlightBox data={data.homepage.frontmatter.main_highlight_box} />
          </Box>

          <Box p="20px" pb="50px">          
            <HighlightBox highlights={ServicesBoxFactory(data.homepage.frontmatter.services)} />
          </Box>

          {/* <Box w="100%" p="10px">
            <HighlightBox highlights={propertyFactory(data.homepage.frontmatter.featured_listings)} withBorder={true}/>
          </Box> */}

        </Layout>
    </main> 
  )
}

export default IndexPage

export const pageQuery = graphql`
query HomepageQuery {
  homepage: markdownRemark(fileAbsolutePath: {regex: "/homepage.md/"}) {
    frontmatter {
      services {
        title
        description
      }
      featured_listings {
        address
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        price
      }
      main_highlight_box {
        action_slug
        action_text
        body
        heading
        image {
					childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`;