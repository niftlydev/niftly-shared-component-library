import * as React from 'react';

import { Box, Flex, Center, Spacer, Grid, Image, Button } from '@chakra-ui/react';

import { Link } from 'gatsby';

const StaticNavbar = ({ links, rightLink, logoImg }) => {

    return (React.createElement(Box, { alignItems: "center", bg: "brand.navbarColor", w: "100%", p: 4 },

        React.createElement(Flex, null,

            React.createElement(Box, { bg: "brand.navbarColor" },

                React.createElement(Center, null,

                    React.createElement(Image, { boxSize: "50px", src: logoImg }))),

            React.createElement(Spacer, null),

            React.createElement(Box, { bg: "brand.navbarColor" },

                React.createElement(Grid, { templateColumns: "repeat(5, 1fr)", gap: 6 }, links.map(link => {

                    return React.createElement(Box, { w: "100%" },

                        React.createElement(Center, null,

                            React.createElement(Button, { colorScheme: "brand", color: "white", as: Link, to: link.slug }, link.text)));

                }))),

            React.createElement(Spacer, null),

            React.createElement(Box, { bg: "brand.navbarColor" },

                React.createElement(Center, null,

                    React.createElement(Button, { colorScheme: "brand", color: "white", as: Link, to: rightLink.slug }, rightLink.text))))));

};

export default StaticNavbar;

