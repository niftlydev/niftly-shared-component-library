import * as React from "react"
import { HighlightBox, HighlightSize } from "../components/highlight-box/highlight-box";
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider/slider';
import { ServicesBoxFactory } from '../utils/front-page/services-box/services-box-factory';
import Layout from '../components/layout/layout';
import {Box, Image, Text, Center, Container} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { MainHighlightBox } from '../components/main-highlight-box/main-highlight-box';
import { SavingsSlider, ISavingsSliderProps } from '../components/real-estate/savings-slider/savings-slider';
import { PaddingSize } from '../components/sizing-wrapper/sizing-wrapper';
import { MailchimpSubscribe, IMailchimpSubscribeProps } from "../components/mailchimp-subscribe/mailchimp-subscribe";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import Img from 'gatsby-image'

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
    sizing: { padding: PaddingSize.md },
    variants: {
      textVariant: "brand-secondary",
      headingVariant: "brand-secondary",
      btnVariant: "action-link"
    },
    header: "NEWSLETTER",
    subHeader: "Stay in Touch",
    description: "Get access to new listings, inspiration, and tips.",
    toastTitle: "You're the best!"
  } as IMailchimpSubscribeProps;

  let content = data.homepage.frontmatter.main_highlight_box;

  let heading = <Box p="2.5%"><Heading>{content.heading}</Heading></Box>
  let body = <Box p="2.5%"><Text>{content.body}</Text></Box>
  let highlight = (<Box p="2.5%"><Button variant="action-link" as={Link} to={content.action_slug} size="lg" mt="24px">
                                {content.action_text}
                            </Button></Box>)
  let image = <Img style={{height: "75%", width: "90%"}} fluid={content.image.childImageSharp.fluid} />

  return (
    <main>
      <title>Home Page</title>

        <Layout>

          <Box pb="20px" pr="20px" pl="20px">
            <MainHighlightBox heading={heading} body={body} highlight={highlight} img={image}/>
          </Box>

          <Box>
            <SavingsSlider props={savingsSliderProps} />
          </Box>

          <Box bg="blue.100">
            <MailchimpSubscribe props={mailChimpSubProps} />
          </Box>
          


          {/* <Box w="100%" p="10px">
            <HighlightBox highlights={propertyFactory(data.homepage.frontmatter.featured_listings)} withBorder={true} size={HighlightSize.xl} padding={PaddingSize.md}/>
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