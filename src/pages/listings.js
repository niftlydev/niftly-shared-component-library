import * as React from 'react';
import {ListingFactory} from '../utils/listing/listing-factory';
import {Listing} from '../components/listing/listing';
import Layout from '../components/layout/layout';


const ListingsPage = () => {
       
    return (
      <main>
        <title>Home Page</title>  
          <Layout>
           <Listing listing={ListingFactory()}/>
          </Layout>
      </main> 
    )
  }
  
  export default ListingsPage