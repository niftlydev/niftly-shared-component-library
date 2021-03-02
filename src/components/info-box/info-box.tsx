import React, { cloneElement, ReactElement } from 'react';
import {Box, Divider, Heading, Text, Image, Center} from '@chakra-ui/react';
import { InfoBoxFooter } from './components/info-box-footer';
import { ISocialItems } from './components/social';


export interface IInfoBox {
    heading: ReactElement
    description: ReactElement
    highlight?: ReactElement
    social?: Array<ISocialItems>
    image?: any
}



export class Info implements IInfoBox {
    heading: ReactElement;
    description: ReactElement;
    highlight?: ReactElement;
    socials?: Array<ISocialItems>
    image?: any


    constructor(heading: ReactElement, description: ReactElement, highlight?: ReactElement, social?: Array<ISocialItems>, image?: any)
    {
        this.heading = heading
        this.description = description
        this.highlight = highlight
        this.socials = social
        this.image = image
    }
}



interface InfoBoxProps {
    info: IInfoBox,
    border?: boolean
}



export const InfoBox = ({info, border, imageHeight, imageWidth}: any) => {
    return (
        <Box flex="1" height="100%" width="100%" display="flex" flexDirection="column" justifyContent="space-between" borderColor="brand.footbarColor" borderWidth={border ? "2px" : "0px"}>
            <Box flex={5} display="flex" flexDirection="row">
                <Box flex="1 1 50%" display="flex" flexDirection="column" justifyContent="space-around" p="5%">
                    <Box paddingBottom="5%">
                        <Heading as="h2" size="lg" paddingBottom="2px">{info.heading}</Heading>
                        <Divider orientation="horizontal" borderWidth=".75px" borderColor="brand.footbarTitleColor" />
                    </Box>
                    {React.cloneElement(info.description)} 
                    {React.cloneElement(info.highlight)}
                </Box>
                {info.image ? <Box flex="1 1 50%"><Center height="100%">{cloneElement(info.image)}</Center></Box> : <></>}
            </Box>
            <InfoBoxFooter socials={info.socials}/> 
        </Box>
    )
}