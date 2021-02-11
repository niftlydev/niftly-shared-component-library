import * as React from "react"
import { HighlightBox } from "../components/highlight-box/highlight-box";
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider';
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

          <Box p="10px">
            <MainHighlightBox heading="asdf" body="asdfasdfasdfasdfasdfasfadfasdf" actionText="action text" img={data.homepage.frontmatter.slider_images[0].image} />
          </Box>

          <Box p="10px">          
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
      slider_images {
        description
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
    }
  }
}
`;