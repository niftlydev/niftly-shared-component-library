import  React, { Component, useState } from 'react';

import { Link } from 'gatsby';

import { Box, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading, Text, Button, Icon } from '@chakra-ui/react';

import { FaDollarSign } from 'react-icons/fa';

import { SizingWrapper, ISizingWrapperProps, PaddingSize, calculatePadding, ComponentSize, calculateSize } from '@bit/niftly.shared.sizing-wrapper';

import NumberFormat from 'react-number-format';



export interface ISavingsSliderProps extends ISizingWrapperProps {

    sizingProps?: ISizingWrapperProps;

    min: number;

    max: number;

    step: number;

    percentageToSave: number;

    actionBtnText: string;

    actionBtnSlug: string;

}







export const SavingsSlider = ({props}: {props: ISavingsSliderProps}) => {



    const [sliderValue, setSliderValue] = useState(500000);

    const [savingsValue, setSavingsValue] = useState(0);



    const calculateSavingsValue = (value) => {

        setSliderValue(value);

        var valueSaved = value * props.percentageToSave;

        setSavingsValue(valueSaved);

    }

    

    return (

        <SizingWrapper props={props.sizingProps}>

         

                <Box>

                    <Center p="2px"><Heading>Drag to see what you can save by listing with us!</Heading></Center>

                    <Center p="2px"><Text>My home value: <NumberFormat value={sliderValue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Text></Center>

                    <Center p="2px"><Text>I can save: <NumberFormat value={savingsValue} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Text></Center>

                </Box>



                <Box p="5px">

                    <Slider min={props.min} max={props.max} step={props.step} aria-label="slider-ex-5" onChangeEnd={(val) => calculateSavingsValue(val)}>

                        <SliderTrack>

                            <SliderFilledTrack />

                        </SliderTrack>

                        <SliderThumb />

                    </Slider>

                </Box>  



                <Box p="5px">

                    <Center>

                        <Button variant="action-link" as={Link} to={props.actionBtnSlug}>{props.actionBtnText}</Button>

                    </Center>            

                </Box>



        </SizingWrapper>

    )

}

