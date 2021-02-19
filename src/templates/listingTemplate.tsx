import { Box, Heading } from "@chakra-ui/react";
import React from "react"
import {IInfoBox, Info, InfoBox} from '../components/info-box/info-box';
import Layout from "../components/layout/layout";
import { MainHighlightBox } from "../components/main-highlight-box/main-highlight-box";

export default function Template({pageContext}) {
    const {data} = pageContext

    let highlight = <Heading size="l">{data.frontmatter.price}</Heading>
    
    return (
        <Layout>
            <Box p="15%">
                <Box p="2.5%">
                    <MainHighlightBox heading={data.frontmatter.address} highlight={highlight} body={data.frontmatter.bio} actionText="Contact us!" img={data.frontmatter.listing_image}/>
                </Box>
            </Box>
        </Layout>
    )
}