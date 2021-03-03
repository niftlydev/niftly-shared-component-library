import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react"
import {IInfoBox, Info, InfoBox} from '../components/info-box/info-box';
import Layout from "../components/layout/layout";
import { MainHighlightBox } from "../components/main-highlight-box/main-highlight-box";
import Img from 'gatsby-image'

export default function Template({pageContext}) {
    const {data} = pageContext


    let heading = <Box p="2.5%"><Heading size="lg">{data.frontmatter.address}</Heading></Box>
    let highlight = <Box p="2.5%"><Heading size="xl">{data.frontmatter.price}</Heading></Box>
    let body = <Box p="2.5%"><Text>{data.frontmatter.bio}</Text></Box>
    let image = <Img style={{height: "75%", width: "90%"}} fluid={data.frontmatter.listing_image.childImageSharp.fluid}/> 

    
    return (
        <Layout>
            <Box p="5%">
                <Box p="2.5%">
                    <MainHighlightBox heading={heading} highlight={highlight} body={body} img={image}/>
                </Box>
            </Box>
        </Layout>
    )
}