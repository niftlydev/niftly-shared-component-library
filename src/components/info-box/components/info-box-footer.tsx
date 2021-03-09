import React from 'react';
import {Box, Center, Icon, Link} from '@chakra-ui/react';
import { ISocialItems, SocialPlatform } from '../../social-item/social-item';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import IconExternalLink from '../../icon/icon-external-link';

export interface InfoBoxFooterProps {
    socials: Array<ISocialItems>
}

export const InfoBoxFooter = ({socials} : InfoBoxFooterProps) => {

    const renderPlatformIcon = (platform: SocialPlatform) => {
        switch(platform)
        {
            case SocialPlatform.Facebook:
                return FaFacebookF;
            case SocialPlatform.Instagram:
                return FaInstagram;
            case SocialPlatform.Twitter:
                return FaTwitter;
            case SocialPlatform.YouTube:
                return FaYoutube;
        }
    }

    return(
        <Box backgroundColor="brand.footbarColor" padding="1%">
            <Center height="100%">
                {socials?.map((platform: ISocialItems) => {
                    return (
                        <Box color="brand.iconActionColor" marginRight="5">
                            <IconExternalLink
                            icon={<Icon as={renderPlatformIcon(platform.platform)} w={6} h={6} />}
                            href={platform.link}
                            />
                        </Box>
                    )
                })}
            </Center>
        </Box>
    )
}