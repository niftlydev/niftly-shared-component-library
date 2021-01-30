import React from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

export const Property = ({ image, imageAlt, address, price }) => {

    return (React.createElement(Box, { width: "100%", h: "100%", position: "relative" },

        React.createElement(Image, { width: "100%", h: "100%", src: image, alt: imageAlt }),

        React.createElement(Box, { p: "5", backgroundColor: "rgba(0,0,0,.2)", display: "flex", boxShadow: "0px -3px 2px rgba(0,0,0,.2)", justifyContent: "space-around", flexDirection: "column", w: "100%", h: "35%", top: "65%", left: 0, position: "absolute" },

            React.createElement(Text, { fontWeight: "bold", zIndex: 1000, color: "white" }, address),

            React.createElement(Text, { zIndex: 1000, color: "white" }, price))));

};

