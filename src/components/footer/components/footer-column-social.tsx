import React from 'react';
import { ColumnDetailsSocial } from '../footer';
import { Box, Icon, Grid, Center } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaRegEnvelope } from "react-icons/fa"
import IconExternalLink from '../../icon/icon-external-link';

const FooterColumnSocial = ({columnDetailsSocial}: {columnDetailsSocial: ColumnDetailsSocial}) => {
    return (
        <Center>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>

                {/* TODO: Make icons an array coming from column details for max flexibility */}

                {/* Facebook Icon */}
                {columnDetailsSocial.facebook !== null ? 
                <Box p="5px">
                    <IconExternalLink
                    icon={<Icon as={FaFacebookF} />}
                    href={columnDetailsSocial.facebook}
                />
                </Box>: null}

                {/* Email Icon */}
                {columnDetailsSocial.emailAddress !== null ? 
                <Box p="5px">
                    <IconExternalLink
                    icon={<Icon as={FaRegEnvelope} />}
                    href={columnDetailsSocial.emailAddress}
                />
                </Box>: null}

                {/* Pinterest Icon */}
                {columnDetailsSocial.pintrest !== null ? 
                <Box p="5px">
                    <IconExternalLink
                    icon={<Icon as={FaPinterestP} />}
                    href={columnDetailsSocial.pintrest}
                />
                </Box>: null}

                {/* Instagram Icon */}
                {columnDetailsSocial.instagram !== null ? 
                <Box p="5px">
                    <IconExternalLink
                    icon={<Icon as={FaInstagram} />}
                    href={columnDetailsSocial.instagram}
                />
                </Box>: null}

            </Grid>
        </Center>
    )
}

export default FooterColumnSocial;