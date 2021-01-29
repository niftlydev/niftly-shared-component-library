import React from "react"
// import "../../../node_modules/slick-carousel/slick"; 
// import "../../../node_modules/slick-carousel/slick";
import {Box} from '@chakra-ui/react';
import LogoImg from '../../images/navbar/icon.png';
import columnFactory from "../../utils/footer/column-factory";
import { Footer, Column, ColumnType } from '../footer/footer';
import StaticNavbar from '../navbar/static-navbar';


export default function Layout({ children }) {
    const links = [{text: "About Us", slug: "/about-us"}, {text: "Listings", slug: "/listings"}, {text: "Contact", slug: "/contact"}, {text: "Blog", slug: "/blog"}];
    const rightLink = {text: "Find Your Home", slug: "/find-your-home"}
    const columns = columnFactory();

  return (
      <Box>
          <StaticNavbar links={links} rightLink={rightLink} logoImg={LogoImg} />
            {children}
           <Footer columns={columns} />
      </Box>
  )
    
}