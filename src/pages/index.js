import * as React from "react"
import StaticNavbar from '../components/navbar/static-navbar';
import LogoImg from '../images/navbar/icon.png';
import { Footer, Column, ColumnType } from '../components/footer/footer';
import columnFactory from "../utils/footer/column-factory";
import { NetlifyForm } from "../components/form/netlify-form";
import { formFactory } from "../utils/form/form-factory";
import {ListingFactory} from '../utils/listing/listing-factory';
import {Listing} from '../components/listing/listing';
import { infobox } from "../utils/info-box/info-box-factory";
import {InfoBox} from '../components/info-box/info-box';
import { HighlightBox } from "../components/highlight-box/highlight-box";
import {highlightBoxFactory} from '../utils/highlight-box/highlight-box-factory';
import { propertyFactory } from "../utils/property/property-factory";
import { ImageSlider } from '../components/slider';
import ImageSliderFactory from '../utils/image-slider/image-slider-factory';
import Layout from '../components/layout/layout';
import {AboutUs} from '../components/about-us/about-us';
import {Box, Image, Text, Center} from '@chakra-ui/react';
import ImageOne from '../images/image-slider/stock-photo-1.jpg'

// markup
const IndexPage = () => {

  const images = ImageSliderFactory();

      //<Listing listing={ListingFactory()}/>
  return (
    <main>
      <title>Home Page</title>

        <Layout>
          <Listing listing={ListingFactory()}/>
        </Layout>
    </main> 
  )
}

export default IndexPage
