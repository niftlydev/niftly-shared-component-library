import * as React from "react"
import { HighlightBox } from "../components/highlight-box/highlight-box";
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider/slider';
import { ServicesBoxFactory } from '../utils/front-page/services-box/services-box-factory';
import Layout from '../components/layout/layout';
import {Box, Image, Text, Center} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { MainHighlightBox } from '../components/main-highlight-box/main-highlight-box';
import { SavingsSlider, ISavingsSliderProps } from '../components/real-estate/savings-slider/savings-slider';
import { PaddingSize } from '../components/sizing-wrapper/sizing-wrapper';
import { MailchimpSubscribe, IMailchimpSubscribeProps } from "../components/mailchimp-subscribe/mailchimp-subscribe";

// markup
const IndexPage = ({data}) => {

  const savingsSliderProps = {
    sizingProps: { padding: PaddingSize.sm },
    min: 150000,
    max: 1000000,
    step: 10000,
    percentageToSave: 0.02,
    actionBtnText: "List Your Home",
    actionBtnSlug: "/contact-us"
  } as ISavingsSliderProps;

  const mailChimpSubProps = {
    sizingProps: { padding: PaddingSize.md },
    header: "NEWSLETTER",
    subHeader: "Stay in Touch",
    description: "Get access to new listings, inspiration, and tips.",
    toastTitle: "You're the best!"
  } as IMailchimpSubscribeProps;

  return (
    <main>
      <title>Home Page</title>

        <Layout>

          <Box pb="20px" pr="20px" pl="20px">
            <MainHighlightBox data={data.homepage.frontmatter.main_highlight_box} />
          </Box>

          <Box>
            <SavingsSlider props={savingsSliderProps} />
          </Box>

          <Box>
            <MailchimpSubscribe props={mailChimpSubProps} />
          </Box>

          {/* <Box w="100%" p="10px">
            <HighlightBox highlights={propertyFactory(data.homepage.frontmatter.featured_listings)} withBorder={true}/>
          </Box> */}

          {/* <Box p="20px" pb="50px">          
            <HighlightBox highlights={ServicesBoxFactory(data.homepage.frontmatter.services)} />
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