import React from 'react';

import { Box, Center, Icon } from '@chakra-ui/react';

import { SocialPlatform } from './social';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import IconExternalLink from '../../icon/icon-external-link';

export const InfoBoxFooter = ({ socials }) => {

    const renderPlatformIcon = (platform) => {

        switch (platform) {

            case SocialPlatform.Facebook:

                return FaFacebookF;

            case SocialPlatform.Instagram:

                return FaInstagram;

            case SocialPlatform.Twitter:

                return FaTwitter;

            case SocialPlatform.YouTube:

                return FaYoutube;

        }

    };

    return (React.createElement(Box, { backgroundColor: "brand.footbarColor", flex: "1" },

        React.createElement(Center, { height: "100%" }, socials.map((platform) => {

            return (React.createElement(Box, { color: "brand.iconActionColor", marginRight: "5" },

                React.createElement(IconExternalLink, { icon: React.createElement(Icon, { as: renderPlatformIcon(platform.platform), w: 6, h: 6 }), href: platform.link })));

        }))));

};

