import * as React from "react"
import { infobox } from "../utils/info-box/info-box-factory";
import {InfoBox} from '../components/info-box/info-box';
import { HighlightBox } from "../components/highlight-box/highlight-box";
import {highlightBoxFactory} from '../utils/highlight-box/highlight-box-factory';
import Layout from '../components/layout/layout';
import {AboutUs} from '../components/about-us/about-us';
import {Box, Image, Text, Center} from '@chakra-ui/react';

// markup
const AboutPage = () => {

  return (
    <main>
      <title>Home Page</title>

        <Layout>
          {/* <AboutUs>
            <Box m="5%" flex="1 0 25%" backgroundColor="rgba(50,50,50, .4)">
              <Center>
                <Image w="30%" objectFit="cover" src={ImageOne}/>
              </Center>
            </Box>
            <Box flex="1 0 25%" p="10%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Text fontSize="24px" paddingBottom="5%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text fontSize="24px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Box>
            <Box flex="1 0 25%" display="flex" flexDirection="row" justifyContent="space-between" p="5%">
              <Box p="10px" flex="0 1 45%">
                <InfoBox info={infobox} border={true}/>
              </Box>
              <Box p="10px" flex="0 1 45%">
                <InfoBox info={infobox} border={true}/>
              </Box>
            </Box>
            <Box flex="1 0 25%" display="flex" flexDirection="row" p="10%">
              <HighlightBox highlights={highlightBoxFactory()} withBorder={true}/>
            </Box>
          </AboutUs> */}
        </Layout>
    </main> 
  )
}

export default AboutPage