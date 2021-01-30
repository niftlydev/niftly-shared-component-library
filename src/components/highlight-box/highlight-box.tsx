import React from 'react';
import {Box, Divider} from '@chakra-ui/react';

export enum HighlightSize {
    sm,
    md,
    lg,
    xl
}

type HighlightBoxProps = {
    highlights: Array<any>,
    size: HighlightSize
    withBorder?: boolean
}

export const HighlightBox = ({highlights, size, withBorder = false} : HighlightBoxProps) => {

    const renderHighlights = () => {
        return highlights.map((h, i) => {
            return (
                <Box flex={calculateSize()} display="flex" flexDirection="row">
                    <Box p="5">{h}</Box>
                    {withBorder && i < highlights.length -1 ? <Divider h="80%" alignSelf="center" borderColor="brand.footbarTitleColor" orientation="vertical"/> : <></>}
                </Box>
            ) 
        });
    }

    const calculateSize = () => {
        switch(size) {
            case HighlightSize.sm:
                return "1 1 23%";
            case HighlightSize.md:
                return "1 1 32%";
            case HighlightSize.lg:
                return "1 1 49%";
            case HighlightSize.xl:
                return "1 1 100%";
        }
    }

    return(
        <Box display="flex" flexDirection="row">
            {renderHighlights()}
        </Box>
    )
}

