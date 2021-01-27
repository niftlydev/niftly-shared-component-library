import * as React from "react"
import { Button, ButtonGroup, Alert, AlertIcon } from "@chakra-ui/react"
import StaticNavbar from '../components/navbar/static-navbar';
import LogoImg from '../images/navbar/icon.png';
import { Footer, Column, ColumnType } from '../components/footer/footer';
import columnFactory from "../utils/footer/column-factory";
import { NetlifyForm } from "../components/form/netlify-form";
import { formFactory } from "../utils/form/form-factory";

// markup
const IndexPage = () => {

  const links = [{text: "About Us", slug: "/about-us"}, {text: "Listings", slug: "/listings"}, {text: "Contact", slug: "/contact"}, {text: "Blog", slug: "/blog"}];
  const rightLink = {text: "Find Your Home", slug: "/find-your-home"}
  const columns = columnFactory();

  return (
    <main>
      <title>Home Page</title>

      <StaticNavbar links={links} rightLink={rightLink} logoImg={LogoImg} />

      <NetlifyForm forms={formFactory()} />

      <Footer columns={columns} />

    </main>
  )
}

export default IndexPage
