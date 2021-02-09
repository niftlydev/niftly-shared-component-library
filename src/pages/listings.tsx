import * as React from 'react';
import {ListingFactory} from '../utils/listing/listing-factory';
import {Listing} from '../components/listing/listing';
import Layout from '../components/layout/layout';
import { useListingData } from '../queries/listing-query';
import { IInfoBox, Info, InfoBox } from '../components/info-box/info-box';
import { Box, Heading } from '@chakra-ui/react';


const ListingsPage = () => {

  const {listing, fileAbsolutePath} = useListingData();  
       
    return (
      <main>
        <title>Home Page</title>  
          <Layout>
            <Box p="15%">
            {listing.map(l => {

              let highlight = <Heading size="l">{l.price}</Heading>

              let info: IInfoBox = new Info(
                l.address,
                l.description,
                highlight,
                undefined,
                l.photo
              );

              return <Box p="2.5%"><InfoBox info={info} border={true}/></Box>
            })}
            </Box>
          </Layout>
      </main> 
    )
  }
  
  export default ListingsPage