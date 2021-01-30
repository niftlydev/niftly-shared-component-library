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

// markup
const IndexPage = () => {

  const images = ImageSliderFactory();

      //<Listing listing={ListingFactory()}/>
  return (
    <main>
      <title>Home Page</title>

        <Layout>
          <HighlightBox highlights={propertyFactory()} withBorder={true}/>
        </Layout>
    </main> 
  )
}

export default IndexPage
