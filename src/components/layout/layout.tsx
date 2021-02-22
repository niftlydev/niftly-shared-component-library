import React from "react"
import {Box} from '@chakra-ui/react';
import columnFactory from "../../utils/footer/column-factory";
import { Footer, Column, ColumnType } from '../footer/footer';
import StaticNavbar from '../navbar/static-navbar';
import { useStaticQuery, graphql } from "gatsby";

export class Link {
  constructor(text, slug){
    this.text = text;
    this.slug;
  }

  text: string;
  slug: string;
}


export default function Layout({ children }: { children: any }) {
    
const data = useStaticQuery(graphql`
  query LayoutQuery {
    layout: markdownRemark(fileAbsolutePath: {regex: "/layout.md/"}) {
      frontmatter {
        nav_logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nav_right_slug
        nav_right_text
        footer_column_info { 
          address
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          phone_number
        }
        footer_column_links {
          slug
          text
        }
        footer_column_social {
          facebook
          instagram
          pinterest
          email
        }
        navbar_link {
          slug
          text
        }
      }
    }
  }
`)


  return (
      <Box>
          <StaticNavbar links={data.layout.frontmatter.navbar_link} rightLink={new Link(data.layout.frontmatter.nav_right_text, data.layout.frontmatter.nav_right_slug)} logoImg={data.layout.frontmatter.nav_logo} />
            {children} 
           <Footer columns={columnFactory(data.layout.frontmatter.footer_column_info, data.layout.frontmatter.footer_column_links, data.layout.frontmatter.footer_column_social)} />
      </Box>
  )
    
}