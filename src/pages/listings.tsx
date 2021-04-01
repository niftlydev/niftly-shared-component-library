import * as React from 'react';
import Layout from '../components/layout/layout';
import { useListingData } from '../queries/listing-query';
import { IInfoBox, Info, InfoBox } from '../components/info-box/info-box';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
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

  const listing = useListingData();  
  const [hover, setHover] = React.useState(false);
       
    return (
      <main>
        <title>Home Page</title>  
          <Layout>
            <Box p="10px">
              <SimpleGrid columns={2} spacing={5}>
                {listing.edges.map((l: ListingMarkdown, index: number) => {

                  let header = <Text fontWeight="bold">{l.node.frontmatter.address}</Text>
                  let highlight = <Text fontWeight="bold">{l.node.frontmatter.price}</Text>
                  let description = <Text>{renderDescription(l.node.frontmatter.bio)}</Text>
                  let image = <Img style={{height: "auto", width: "25em"}} fluid={l.node.frontmatter.listing_image.childImageSharp.fluid}/>

                  let info: IInfoBox = new Info(
                    header,
                    description,
                    highlight,
                    undefined,
                    image
                  );
                  return <Box p="10px" height="30em" cursor={hover ? "pointer" : "default"} onClick={() => navigate(l.node.fields.slug)} 
                    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                      <InfoBox info={info} border={true}/>
                    </Box>
            })}
              </SimpleGrid>
            </Box>
          </Layout>
      </main> 
    )
  }
  
  export default ListingsPage
