import { Box, Center} from '@chakra-ui/react';

import * as React from 'react';

import { ListingHighlight } from '@bit/listing-highlight';

import { Testimonial } from '@bit/niftly.shared.testimonial';

import { useListingData } from '../../../queries/listing-query';

import Img from 'gatsby-image';



export const ServicesBoxFactory = (data) => {

    const tests: Array<any> = [];

    const listing = useListingData(); 



    listing.edges.map((l: any, index: number) => {

    



        let highlight = <Box backgroundColor="green" width="50%" padding="5%" transform="rotate(-5deg)">SOLD!</Box>

        let image = <Box p="2em"><Img style={{height: "24em", width: "20em"}} fluid={l.node.frontmatter.listing_image.childImageSharp.fluid}/></Box>

        tests.push(<ListingHighlight highlight={highlight} background={image} />)



    });



   /*data.forEach(e => {

        tests.push(<Testimonial title={e.title} description={e.description} />);

    });*/



    return tests;

}



