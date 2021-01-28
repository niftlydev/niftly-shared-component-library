import * as React from "react"
import { Button, ButtonGroup, Alert, AlertIcon, Box } from "@chakra-ui/react"
import { ImageSlider } from '../components/slider/image-slider';
import ImageSliderFactory from '../utils/image-slider/image-slider-factory';
import Layout from '../components/layout/layout';

// markup
const IndexPage = () => {

  const images = ImageSliderFactory();

  return (
    <main>
      <title>Home Page</title>

        <Layout>
          <ImageSlider images={images} padding="10px" height="500px" width="100%" />
        </Layout>


    </main> 
  )
}

export default IndexPage
