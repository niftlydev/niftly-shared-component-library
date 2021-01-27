import React from 'react';
import { Box, Button, FormControl, FormErrorIcon, FormLabel, Input } from '@chakra-ui/react';

export enum InputType {
    Text,
    Email,
    Password,
    Submit
}

export enum InputSize {
    small,
    medium,
    large
}

export interface INetlifyFormItem {
    label: string;
    inputType: InputType 
    inputSize: InputSize
    inputPlaceholder?: string
}

export class NetlifyFormItem implements INetlifyFormItem
{
    label = "";
    inputType = InputType.Text;
    inputSize = InputSize.large;
    inputPlaceholder = "";

    constructor(inputLabel: string, type: InputType, size: InputSize, placeholder: string) {
        this.label = inputLabel;
        this.inputType = type;
        this.inputSize = size;
        this.inputPlaceholder = placeholder;
    }
}

type NetlifyFormProps = {
    forms: Array<INetlifyFormItem>
}

export const NetlifyForm = ({forms}: NetlifyFormProps) => {

    const renderInput = (formInput: INetlifyFormItem) => {
        switch(formInput.inputType)
        {
            case InputType.Text:
                return <Input placeholder={formInput.inputPlaceholder} type="text"/>
            case InputType.Email:
                return <Input placeholder={formInput.inputPlaceholder} type="email"/>
            case InputType.Password:
                return <Input type="password"/>
            case InputType.Submit:
                return <Button width="100%" backgroundColor="brand.500" color="white" type="submit">{formInput.label}</Button> 
        }
    }

    const renderForms = () => {
        return forms.map((formItem: INetlifyFormItem) => {
            let size = "3";
            switch(formItem.inputSize)
            {
                case InputSize.small:
                    size = "0 0 32%";
                    break;
                case InputSize.medium:
                    size = "0 0 49%";
                    break;
                case InputSize.large:
                    size = "1 1 100%";
                    break;
            }

            return (
                <Box flex={size}>
                    {formItem.inputType !== InputType.Submit ? <FormLabel>{formItem.label}</FormLabel> : <></>}
                    {renderInput(formItem)}
                </Box>
            )
        })
    }

    return (
        <Box>
            <FormControl display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" netlify>
                {renderForms()}
            </FormControl>

        </Box>
    )
}