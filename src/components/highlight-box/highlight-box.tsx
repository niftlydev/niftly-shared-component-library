import React from 'react';
import {Box, Center, Divider} from '@chakra-ui/react';

export enum HighlightSize {
    sm,
    md,
    lg,
    xl
}

export enum PaddingSize {
    xs,
    sm,
    md,
    lg,
    xl
}

type HighlightBoxProps = {
    highlights: Array<any>,
    size: HighlightSize
    padding: PaddingSize
    withBorder?: boolean
}

export const HighlightBox = ({highlights, size, padding, withBorder = false} : HighlightBoxProps) => {

    const renderHighlights = () => {
        return highlights.map((h, i) => {
            return (
                <Box flex={calculateSize()} display="flex" flexDirection="row">
                    <Box textAlign="center" padding={calculatePadding()}>{h}</Box>
                    {withBorder && i < highlights.length -1 ? <Divider h="90%" alignSelf="center" borderColor="brand.footbarTitleColor" orientation="vertical"/> : <></>}
                </Box>
            ) 
        });
    }

    const calculatePadding = () => {
        switch(padding) {
            case PaddingSize.xs:
                return '1%'; 
            case PaddingSize.sm:
                return '2%'; 
            case PaddingSize.md:
                return '5%'; 
            case PaddingSize.lg:
                return '10%'; 
            case PaddingSize.xl:
                return '15%'; 
        }
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

