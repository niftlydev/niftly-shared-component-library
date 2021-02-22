import * as React from 'react';
import { Box, Center } from '@chakra-ui/react';

export interface ISizingWrapperProps {
    padding?: PaddingSize; 
}

export enum PaddingSize {
    xs,
    sm,
    md,
    lg,
    xl
}

export const calculatePadding = (padding: PaddingSize) => {
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

export enum ComponentSize {
    sm,
    md,
    lg,
    xl
}

export const calculateSize = (size: ComponentSize) => {
    switch(size) {
        case ComponentSize.sm:
            return "1 1 23%";
        case ComponentSize.md:
            return "1 1 32%";
        case ComponentSize.lg:
            return "1 1 49%";
        case ComponentSize.xl:
            return "1 1 100%";
    }
}


export const SizingWrapper = ({props, children}: {props: ISizingWrapperProps, children: any}) => {

    var size: ComponentSize;
    var padding: PaddingSize;

    // if (!props.size) {
    //     size = ComponentSize.md;
    // } else {
    //     switch(props.size) {
    //         case 0:
    //             size = ComponentSize.sm;
    //             break;
    //         case 1: 
    //             size = ComponentSize.md;
    //             break;
    //         case 2:
    //             size = ComponentSize.lg;
    //             break;
    //         case 3:
    //             size = ComponentSize.xl;
    //             break;
    //     }
    // }

    if (!props.padding) {
        padding = PaddingSize.md;
    } else {
        console.log(props.padding);
        switch(props.padding) {
            case 0:
                padding = PaddingSize.xs;
                break;
            case 1:
                padding = PaddingSize.sm;
                break;
            case 2:
                padding = PaddingSize.md;
                break;
            case 3: 
                padding = PaddingSize.lg;
                break;
            case 4:
                padding = PaddingSize.xl;
                break;
        }
    }

    return (
        <Box>
            <Box padding={calculatePadding(padding)}>
                {children}
            </Box>
        </Box>
        
    )
}