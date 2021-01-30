import React from 'react';

import { Box, Center, Image } from '@chakra-ui/react';

import { Info, InfoBox } from '../info-box/info-box';

export class ListingItem {

    constructor(info, listImage, imageAlt) {

        this.infoBox = new Info("", "");

        this.infoBox = info;

        this.image = listImage;

        this.imageAlt = imageAlt;

    }

}

export const Listing = ({ listing }) => {

    return (React.createElement(Box, { display: "flex", flexDirection: "row", margin: "5", borderWidth: "1px", borderColor: "brand.footbarColor" },

        React.createElement(Box, { flex: "1 1 50%" },

            React.createElement(InfoBox, Object.assign({}, listing.infoBox))),

        React.createElement(Box, { flex: "1 1 50%" },

            React.createElement(Center, { height: "100%" },

                React.createElement(Image, { src: listing.image, alt: listing.imageAlt })))));

};

