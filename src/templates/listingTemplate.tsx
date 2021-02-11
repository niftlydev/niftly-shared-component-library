import { Box, Heading } from "@chakra-ui/react";
import React from "react"
import {IInfoBox, Info, InfoBox} from '../components/info-box/info-box';
import Layout from "../components/layout/layout";

export default function Template({pageContext}) {
    const {data} = pageContext

    let highlight = <Heading size="l">{data.frontmatter.price}</Heading>
    
    let info: IInfoBox = new Info(
            data.frontmatter.address,
            data.frontmatter.bio,
            highlight,
            undefined,
            data.frontmatter.listing_image
        );


    return (
        <Layout>
            <Box p="15%">
                <Box p="2.5%"><InfoBox info={info} border={false}/></Box>
            </Box>
        </Layout>
    )
}