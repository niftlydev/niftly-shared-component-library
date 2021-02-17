import * as React from 'react';
import {ListingFactory} from '../utils/listing/listing-factory';
import {Listing} from '../components/listing/listing';
import Layout from '../components/layout/layout';
import { useListingData } from '../queries/listing-query';
import { IInfoBox, Info, InfoBox } from '../components/info-box/info-box';
import { Box, Heading } from '@chakra-ui/react';
import { navigate } from 'gatsby';

interface ListingFrontmatter {
	address: string,
	bio: any,
	price: string,
	listing_image: string
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
                {listing.edges.map((l: ListingMarkdown) => {

                  let highlight = <Heading as="h1" size="xl">{l.node.frontmatter.price}</Heading>

                  let info: IInfoBox = new Info(
                    l.node.frontmatter.address,
                    l.node.frontmatter.bio,
                    highlight,
                    undefined,
                    l.node.frontmatter.listing_image
                  );

                  return <Box p="2.5%" height="32em" cursor={hover ? "pointer" : "default"} onClick={() => navigate(l.node.fields.slug)} 
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                      <InfoBox info={info} border={true} imageHeight="22em" imageWidth="22em"/>
                    </Box>
            })}
            </Box>
          </Layout>
      </main> 
    )
  }
  
  export default ListingsPage
