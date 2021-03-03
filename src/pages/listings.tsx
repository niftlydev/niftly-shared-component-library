import * as React from 'react';
import {ListingFactory} from '../utils/listing/listing-factory';
import {Listing} from '../components/listing/listing';
import Layout from '../components/layout/layout';
import { useListingData } from '../queries/listing-query';
import { IInfoBox, Info, InfoBox } from '../components/info-box/info-box';
import { Box, Heading, Text } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { renderDescription } from '../utils/info-box/info-box-factory';

interface ListingFrontmatter {
	address: string,
	bio: any,
	price: string,
	listing_image: any
}

interface Slug {
  slug: string
}

interface ListingNode {
	fileAsbolutePath: string,
  frontmatter: ListingFrontmatter
  fields: Slug
}

interface ListingMarkdown {
	node: ListingNode
}

const ListingsPage = () => {

				// listing here is 
				// {
				// 	node; {
				// 		"fileAsbolutePath"
				// 		"frontmatter": {
				// 				"address":
				// 				"listing"
				// 				"price"
				// 				"listing_image"
				// 		}
				//	}	
				//}
  const listing = useListingData();  
  const [hover, setHover] = React.useState(false);

       
    return (
      <main>
        <title>Home Page</title>  
          <Layout>
            <Box p="15%">
                {listing.edges.map((l: ListingMarkdown, index: number) => {

                  let header = <Heading as="h2" size="xl">{l.node.frontmatter.address}</Heading>
                  let highlight = <Heading as="h1" size="xl">{l.node.frontmatter.price}</Heading>
                  let description = <Text>{renderDescription(l.node.frontmatter.bio)}</Text>
                  let image = <Img style={{height: "23em", width: "23em"}} fluid={l.node.frontmatter.listing_image.childImageSharp.fluid}/>

                  let info: IInfoBox = new Info(
                    header,
                    description,
                    highlight,
                    undefined,
                    image
                  );
                  return <Box p="2.5%" height="32em" cursor={hover ? "pointer" : "default"} onClick={() => navigate(l.node.fields.slug)} 
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                      <InfoBox info={info} border={true}/>
                    </Box>
            })}
            </Box>
          </Layout>
      </main> 
    )
  }
  
  export default ListingsPage
