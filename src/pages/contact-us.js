import * as React from 'react';
import Layout from '../components/layout/layout';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { NetlifyForm } from '../components/form/netlify-form';
import { formFactory } from '../utils/form/form-factory';
import { MainHighlightBox } from '../components/main-highlight-box/main-highlight-box';

const ContactUsPage = () => {

    return (
        <Layout>
            <SimpleGrid columns={2}>
                <Box>
                    {/* <MainHighlightBox data={} /> */}
                </Box>

                <Box h="100vh" p="30px">
                    <NetlifyForm forms={formFactory()} />
                </Box>
            </SimpleGrid>
            
        </Layout>

    )
  }
  
  export default ContactUsPage