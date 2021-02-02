import * as React from "react"
import { HighlightBox } from "../components/highlight-box/highlight-box";
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider';
import { ServicesBoxFactory } from '../utils/front-page/services-box';
import Layout from '../components/layout/layout';
import {Box, Image, Text, Center} from '@chakra-ui/react';
import { graphql } from 'gatsby';

// markup
const IndexPage = ({data}) => {

  return (
    <main>
      <title>Home Page</title>

        <Layout>
          <Box pb="10px">
            <ImageSlider width={"100%"} height={"500px"} images={data.homepage.frontmatter.slider_images} />
          </Box>
          <HighlightBox highlights={ServicesBoxFactory(data.homepage.frontmatter.services)} />
          <HighlightBox highlights={propertyFactory()} withBorder={true}/>
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
        image
      }
      services {
        title
        description
      }
    }
  }
}
`;