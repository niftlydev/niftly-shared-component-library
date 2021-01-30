import * as React from "react"
import { Button, ButtonGroup, Alert, AlertIcon } from "@chakra-ui/react"
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

// markup
const IndexPage = () => {

  const links = [{text: "About Us", slug: "/about-us"}, {text: "Listings", slug: "/listings"}, {text: "Contact", slug: "/contact"}, {text: "Blog", slug: "/blog"}];
  const rightLink = {text: "Find Your Home", slug: "/find-your-home"}
  const columns = columnFactory();

      //<Listing listing={ListingFactory()}/>
  return (
    <main>
      <title>Home Page</title>

      <StaticNavbar links={links} rightLink={rightLink} logoImg={LogoImg} />

      <HighlightBox highlights={propertyFactory()} withBorder={true}/>

      <Footer columns={columns} />

    </main>
  )
}

export default IndexPage
