import * as React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { ComponentSize, calculateSize } from '../../calculate-component-size/calculate-component-size';
import { PaddingSize, calculatePadding } from '../../calculate-padding/calculate-padding';
import { ICommonComponentProps } from '../common-component-props/common-component-props';


export const CommonComponentWrapper = ({props, children}: {props: ICommonComponentProps, children: any}) => {

    var size: ComponentSize;
    var padding: PaddingSize;

    if (!props.size) {
        size = ComponentSize.md;
    } else {
        switch(props.size) {
            case 0:
                size = ComponentSize.sm;
                break;
            case 1: 
                size = ComponentSize.md;
                break;
            case 2:
                size = ComponentSize.lg;
                break;
            case 3:
                size = ComponentSize.xl;
                break;
        }
    }

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
        <Box flex={calculateSize(size)}>
            <Box padding={calculatePadding(padding)}>
                {children}
            </Box>
        </Box>
    )
}