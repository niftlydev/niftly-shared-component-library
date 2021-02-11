import React from 'react';
import {Box, Center} from '@chakra-ui/react';
import { IInfoBox, Info, InfoBox } from '../info-box/info-box';
import Img from 'gatsby-image';

export interface IListingItem {
    infoBox: IInfoBox
    image?: any 
    imageAlt?: string
}

export type ListingProps = {
    listing: IListingItem
}

export class ListingItem implements IListingItem 
 {
    infoBox = new Info("", ""); 
    image?: any 
    imageAlt?: string

    constructor(info: IInfoBox, listImage?: string, imageAlt?: string)
    {
        this.infoBox = info
        this.image = listImage
        this.imageAlt = imageAlt
    }
}

export const Listing = ({listing}: ListingProps) => {
    return (
        <Box display="flex" flexDirection="row" margin="5" borderWidth="1px" borderColor="brand.footbarColor">
            <Box flex="1 1 50%">
                <InfoBox info={listing.infoBox} border={false}/>
            </Box>
            <Box flex="1 1 50%">
                <Center height="100%">
                    <Img
                        fluid={listing.image.childImageSharp.fluid}
                        alt={listing.imageAlt}
                    />
                </Center>
            </Box>
        </Box>
    )
}