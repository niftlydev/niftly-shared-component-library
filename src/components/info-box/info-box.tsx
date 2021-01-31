import React, { ReactElement } from 'react';
import {Box, Divider, Heading, Text} from '@chakra-ui/react';
import { InfoBoxFooter } from './components/info-box-footer';
import { ISocialItems } from './components/social';



export interface IInfoBox {
    heading: string
    description: string
    highlight?: ReactElement
    social?: Array<ISocialItems>
}

export class Info implements IInfoBox {
    heading: string;
    description: string;
    highlight?: ReactElement;
    social?: Array<ISocialItems>

    constructor(heading: string, description: string, highlight?: ReactElement, social?: Array<ISocialItems>)
    {
        this.heading = heading
        this.description = description
        this.highlight = highlight
        this.social = social
    }
}

type InfoBoxProps = {
    info: IInfoBox,
    border?: boolean
}

export const InfoBox = ({info, border} : InfoBoxProps) => {
    return (
        <Box flex="1" height="100%" width="100%" display="flex" flexDirection="column" justifyContent="space-between" borderColor="brand.footbarColor" borderWidth={border ? "2px" : "0px"}>
            <Box flex={5} display="flex" flexDirection="column" justifyContent="space-around" p="5%">
                <Box paddingBottom="5%">
                    <Heading as="h2" size="lg" paddingBottom="2px">{info.heading}</Heading>
                    <Divider orientation="horizontal" borderWidth=".75px" borderColor="brand.footbarTitleColor" />
                </Box>
                <Text fontSize="18px" paddingBottom="5%">{info.description}</Text>
                {React.cloneElement(info.highlight)}
            </Box>
            <InfoBoxFooter social={info.social}/> 
        </Box>
    )
}