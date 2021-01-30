import React from 'react';

import { Box, Divider, Heading, Text } from '@chakra-ui/react';

import { InfoBoxFooter } from './components/info-box-footer';

export class Info {

    constructor(heading, description, highlight, social) {

        this.heading = heading;

        this.description = description;

        this.highlight = highlight;

        this.social = social;

    }

}

export const InfoBox = (info) => {

    return (React.createElement(Box, { flex: "1", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" },

        React.createElement(Box, { flex: "8", display: "flex", flexDirection: "column", justifyContent: "space-around", p: "10" },

            React.createElement(Box, null,

                React.createElement(Heading, { as: "h2", size: "lg", paddingBottom: "2" }, info.heading),

                React.createElement(Divider, { orientation: "horizontal", borderWidth: ".75px", borderColor: "brand.footbarTitleColor" })),

            React.createElement(Text, { fontSize: "md" }, info.description),

            React.createElement(Heading, { as: "h3", size: "xl" }, info.highlight)),

        React.createElement(InfoBoxFooter, { socials: info.social })));

};

