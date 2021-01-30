import React from 'react';
import {Box, Divider, Heading, Text} from '@chakra-ui/react';
import { InfoBoxFooter } from './components/info-box-footer';
import { ISocialItems } from './components/social';



export interface IInfoBox {
    heading: string
    description: string
    highlight?: string
    social?: Array<ISocialItems>
}

export class Info implements IInfoBox {
    heading: string;
    description: string;
    highlight?: string;
    social?: Array<ISocialItems>

    constructor(heading: string, description: string, highlight?: string, social?: Array<ISocialItems>)
    {
        this.heading = heading
        this.description = description
        this.highlight = highlight
        this.social = social
    }
}

export const InfoBox = (info: IInfoBox) => {
    return (
        <Box flex="1" height="100%" width="100%" display="flex" flexDirection="column" justifyContent="space-between">
            <Box flex="8" display="flex" flexDirection="column" justifyContent="space-around" p="10">
                <Box>
                    <Heading as="h2" size="lg" paddingBottom="2">{info.heading}</Heading>
                    <Divider orientation="horizontal" borderWidth=".75px" borderColor="brand.footbarTitleColor" />
                </Box>
                <Text fontSize="md">{info.description}</Text>
                <Heading as="h3" size="xl">{info.highlight}</Heading>
            </Box>
            <InfoBoxFooter socials={info.social}/> 
        </Box>
    )
}