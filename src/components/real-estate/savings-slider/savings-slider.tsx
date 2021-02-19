import  React, { useState } from 'react';
import { Box, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading, Text } from '@chakra-ui/react';
import { ComponentSize, calculateSize } from '../../../utils/sizing/calculate-component-size/calculate-component-size';
import { PaddingSize, calculatePadding } from '../../../utils/sizing/calculate-padding/calculate-padding';
import { CommonComponentWrapper } from '../../../utils/sizing/common/common-component-wrapper/common-component-wrapper';
import { ICommonComponentProps } from '../../../utils/sizing/common/common-component-props/common-component-props';

export interface ISavingsSliderProps extends ICommonComponentProps {
    min: number;
    max: number;
    step: number;
    percentageToSave: number;
}

export const SavingsSlider = ({props}: {props: ISavingsSliderProps}) => {

    const commonProps = {
        size: props.size,
        padding: props.padding
      } as ICommonComponentProps;

    const [sliderValue, setSliderValue] = useState(500000);
    const [savingsValue, setSavingsValue] = useState(0);

    const calculateSavingsValue = (value) => {
        setSliderValue(value);
        var valueSaved = value * props.percentageToSave;
        setSavingsValue(valueSaved);
    }
    
    return (
        <CommonComponentWrapper props={commonProps}>
         
                <Box>
                    <Center><Heading>Drag to see what you can save by listing with us!</Heading></Center>
                    <Center><Text>My home value: {sliderValue}</Text></Center>
                    <Center><Text>I can save: ${savingsValue}</Text></Center>
                </Box>

                <Box>
                    <Slider min={props.min} max={props.max} step={props.step} aria-label="slider-ex-5" onChangeEnd={(val) => calculateSavingsValue(val)}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>  

        </CommonComponentWrapper>
    )
}
